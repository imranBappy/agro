import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Product from './Product';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/features/productFeatures';
import { useGetAllProductsQuery } from '../redux/features/product/productApi';
import ProductCardLoader from './UI/ProductCardLoader';

const Products = ({ navigation }) => {
    const product = useSelector((state) => state.product.product);
    const dispatch = useDispatch();
    const { data, isLoading } = useGetAllProductsQuery();
    const { products = [] } = data || {};
    let content = null;
    if (isLoading) {
        content = <>
            <ProductCardLoader key={1} />
            <ProductCardLoader key={2} />
            <ProductCardLoader key={3} />
            <ProductCardLoader key={4} />
        </>;
    } else if (products) {
        content = products?.map((prod) => <Product
            navigation={navigation}
            key={prod._id}
            item={prod}
        />)
    }

    useEffect(() => {
        if (product.length > 0) return;
        dispatch(getProducts(products))
    }, [])
    return (
        <ScrollView style={styles.container}>
            <Text style={{ fontSize: 16, fontWeight: "500", marginBottom: 10, marginLeft: 10 }} >{"All Products"}</Text>
            <View
                style={{
                    flex: 1,
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 10,
                    marginHorizontal: 2
                }}
            >
                {
                    content
                }
            </View>


        </ScrollView>
    );
};

export default Products;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 10 : 0
    },
});
