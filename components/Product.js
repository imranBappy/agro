// rnfes
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Product = ({ navigation, ...props }) => {
    const { name, thumbnail, price, _id } = props.item;

    return (
        <Pressable
            onPress={() => navigation.navigate("Product", { _id })}
            style={{
                width: "50%",
            }}>
            <View

                style={{
                    height: 300,
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
                    elevation: 1.5,
                }}>

                <View
                    style={{
                        width: "100%",
                        height: "70%",
                        borderRadius: 35,
                        backgroundColor: "#fff",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 10
                    }}
                >
                    <Image
                        source={{ uri: thumbnail }} style={{
                            width: "100%",
                            height: "100%",
                            resizeMode: "contain"

                        }} />
                </View>
                <View
                    style={{
                        width: "100%",
                        height: "30%",
                    }}
                >
                    <Text style={{
                        width: "100%",
                        fontSize: 15,
                        fontWeight: "bold",
                        color: "#000",
                        marginBottom: 10

                    }}>{name}</Text>

                    <Text style={{
                        width: 60,
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "red"

                    }}>${price}</Text>
                </View>

            </View>
        </Pressable>
    )
}

export default Product

const styles = StyleSheet.create({})