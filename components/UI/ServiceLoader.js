import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ServiceLoader = () => {
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

export default ServiceLoader

const styles = StyleSheet.create({
    container: {
        height: 130,
        backgroundColor: "white", padding: 20, margin: 10, borderRadius: 7, flex: 1, alignItems: 'center', justifyContent: "space-between"
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 5,
        flexDirection: 'column',
        alignItems: 'center',
    },
    content: {
        marginTop: 10,
        flex: 1,
    },
});