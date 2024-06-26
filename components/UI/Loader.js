import { ActivityIndicator, StyleSheet, View } from 'react-native'
import React from 'react'

const Loader = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <ActivityIndicator size="small" color="#0000ff" />
                <View style={styles.content} />
            </View>
        </View>
    )
}

export default Loader

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    content: {
        flex: 1,
        marginLeft: 10,
    },
});