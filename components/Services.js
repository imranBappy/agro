import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Services = ({ title, children }) => {

    return (
        <View style={{ paddingHorizontal: 5, paddingVertical: 2 }}>
            <Text style={{
                fontSize: 16, fontWeight: "500", marginHorizontal: 10,
                marginBottom: 5
            }} >{title}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                {
                    children
                }
            </ScrollView>
        </View>
    )
}

export default Services

const styles = StyleSheet.create({})