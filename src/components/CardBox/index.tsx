import React from "react"
import { StyleSheet, Text, View } from "react-native"

export const CardBox = () => {
    return (
        <View style={Styles.cardBox}>
            <Text style={Styles.text}>CArd box teste</Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    cardBox: {
        position: 'relative',
        
    },

    text: {

    }
})