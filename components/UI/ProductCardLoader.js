import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductCardLoader = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <ActivityIndicator size="large" color="#088F8F" />
                <View style={styles.content} >
                    <Text style={{ marginTop: 10, width: "100%", textAlign: "center" }} >{"Loading..."}</Text>
                </View>
            </View>
        </View>
    )
}

export default ProductCardLoader

const styles = StyleSheet.create({
    container: {
        width: "47%",
        height: 200,
        marginHorizontal: 5,
        marginVertical: 5,
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10.0,
        elevation: 3,
    },
    card: {
        width: "100%",
        height: 200,
        borderRadius: 5,
        paddingTop: 50,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        marginTop: 10,
        flex: 1,
    },
});