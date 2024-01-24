
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@src/constants/default';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function Card({number, name, icon}:any) {
    return (
        <View style={Styles.card}>
            <View style={Styles.leftContent}>
                <Text style={Styles.number}>{number}</Text>
                <Text style={Styles.cardName}>{name}</Text>
            </View>
            <View >
                <Ionicons name={icon} size={30} style={Styles.iconBox}></Ionicons>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    card: {
        position: 'relative',
        backgroundColor: colors.white,
        justifyContent: 'space-between',
        padding: 30,
        flexDirection: 'row',
        borderRadius: 20,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 7
        },
        shadowOpacity: 0.08,
        shadowRadius: 3.84,
        margin: 10,
    },

    leftContent: {
        flex:0
    },

    number: {
        position: 'relative',
        color: colors.blue,
        fontWeight: '500',
        fontSize: 35
    },

    cardName: {
        color: colors.black2,
        fontSize: 18,
        marginTop: 5
    },

    iconBox: {
        color: colors.black2
    },
})