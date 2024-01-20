import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import React from "react"
import { CardBox } from "@src/components/CardBox"
import { Card } from "@src/components/Card"
import { colors } from "@src/constants/default"

export const Dashboard = () => {
    return (
        <SafeAreaView>
            {/* <View styles={Styles.topBar}>

            </View> */}
            <View style={Styles.cardBox}>
                <Card number='0' name='Nº de Vendas' icon='eye-outline'></Card>
                <Card number='R$0,00' name='Caixa' icon='cash-outline'></Card>
            </View>

            <View style={Styles.details}>
                <View style={Styles.recentSales}>

                </View>
            </View>
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    topBar: {
        
    },

    cardBox: {

    },

    details: {

    },

    recentSales: {

    },
})