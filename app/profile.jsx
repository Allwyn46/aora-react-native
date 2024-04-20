import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const profile = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.custom_test}>Nan Dha vera yaaru</Text>
        </View>
    )
}

export default profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },

    custom_test: {
        color: "#ccc"
    }
})