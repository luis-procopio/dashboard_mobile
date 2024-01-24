
import { View, Text, StyleSheet, TextInput, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { colors } from '@src/constants/default'

const TopBar = () => {
    return (
        <View style={Styles.container}>
            <TouchableOpacity style={Styles.toggle}>
                <Ionicons name='menu-outline' size={40}></Ionicons>
            </TouchableOpacity>
            <View style={Styles.search}>
                <TextInput style={Styles.input} placeholder='Search' />
                <Ionicons style={Styles.search_icon} name='search-outline'></Ionicons>
            </View>
            <View style={Styles.user}>
                <Image style={Styles.img} source={require('@assets/default_user.jpg')}></Image>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 0
    },

    toggle: {
        position: 'relative',
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0

    },

    search: {
        position: 'relative',
        width: '70%',
        // backgroundColor: colors.blue,
        marginHorizontal: 0,
        marginVertical: 5,
        flexDirection: 'row',

    },

    input: {
        width: '100%',
        height: 40,
        borderColor: colors.black2,
        borderWidth: 1,
        borderRadius: 40,
        paddingHorizontal: 10,
        paddingVertical: 10,
        paddingLeft: 35,
        fontSize: 17
    },

    search_icon: {
        position: 'absolute',
        top: 8,
        left: 10,
        fontSize: 20
    },

    user: {
        position: 'relative',
        width: 43,
        height: 43,
        borderRadius: 50,
    },
    
    img: {
        position: 'relative',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        borderRadius: 50,
    },

})

export default TopBar