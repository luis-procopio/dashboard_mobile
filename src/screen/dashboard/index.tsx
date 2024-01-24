import { Card } from "@src/components/Card"
import TopBar from "@src/components/TopBar"
import { colors } from "@src/constants/default"
import React from "react"
import { FlatList, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const Vendas = [
    {
        id: '1',
        name: 'Produto quaquer',
        price: 50.00,
        paymentType: 'Dinheiro',
        status: 'Entregue'
    },
    {
        id: '2',
        name: 'Produto quaquer',
        price: 50.00,
        paymentType: 'Cartão',
        status: 'Em andamento'
    },
    {
        id: '3',
        name: 'Produto quaquer',
        price: 50.00,
        paymentType: 'Dinheiro',
        status: 'Devolvido'
    },
    {
        id: '4',
        name: 'Produto quaquer',
        price: 50.00,
        paymentType: 'Dinheiro',
        status: 'Pendente'
    },
]
/* const Lista = ({data, item}: any) => {
    const tableRow = () => {
        return (
            <View style={Styles.listItem}>
                <Text>{item.name}</Text>
                <Text>{item.price}</Text>
                <Text>{item.paymentType}</Text>
                <Text>{item.status}</Text>
            </View>
        )
    }

    return (
        <FlatList
            data={Vendas}
            renderItem={tableRow}
            keyExtractor={(item, i) => i}
            numColumns={4}
        />
    )
} */

export const Dashboard = () => {
    return (
        <SafeAreaView style={Styles.container}>
            <View style={Styles.topBar}>
                <TopBar></TopBar>
            </View>
            <View style={Styles.cardBox}>
                <Card number='0' name='Nº de Vendas' icon='eye-outline'></Card>
                <Card number='R$0,00' name='Caixa' icon='cash-outline'></Card>
            </View>

            <View style={Styles.details}>

                <View style={Styles.recentSales}>
                    <ScrollView horizontal contentContainerStyle={Styles.recentSalesTable}>
                        <View style={Styles.cardHeader}>
                            <Text style={Styles.cardHeaderTitle}>Vendas recentes</Text>
                            <TouchableOpacity style={Styles.cardBtn}>
                                <Text style={Styles.btnText}>Ver tudo</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={Styles.tableHeader}>
                            <Text style={Styles.columnTitle}>Nome</Text>
                            <Text style={Styles.columnTitle}>Preço</Text>
                            <Text style={Styles.columnTitle}>Pagamento</Text>
                            <Text style={Styles.columnTitle}>Status</Text>
                        </View>
                        <View>
                            <FlatList
                                style={Styles.table}
                                data={Vendas}
                                keyExtractor={(_, index) => index.toString()}
                                renderItem={({ item }) => {
                                    return (
                                        <View style={Styles.tableRow}>
                                            <Text style={Styles.tableColumn}>{item.name}</Text>
                                            <Text style={[Styles.tableColumn, Styles.textRight]}>R${item.price.toFixed(2)}</Text>
                                            <Text style={Styles.tableColumn}>{item.paymentType}</Text>
                                            <Text style={[Styles.tableColumn, Styles.textRight]}>{item.status}</Text>
                                        </View>
                                    )
                                }}
                            ></FlatList>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView >
    )
}

const Styles = StyleSheet.create({
    container: {
        // flex: 1,
        marginTop: Platform.OS == 'ios'? 0: StatusBar.currentHeight
    },

    topBar: {
        
    },

    cardBox: {

    },

    details: {
        // flex: 1,
        position: 'relative',
        // padding: 20,
        margin: 10,
        gap: 30
    },

    recentSales: {
        position: "relative",
        backgroundColor: colors.white,
        paddingHorizontal: 5,
        paddingVertical: 10,
        minHeight: 500,
        elevation: 5,
        shadowColor: colors.black,
        shadowOffset: {
            width: 10,
            height: 7
        },
        borderRadius: 20,
        shadowOpacity: 0.08,
        shadowRadius: 3.84
    },

    recentSalesTable: {
        flexDirection: "column",
        width: 400
    },

    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "flex-start"
    },

    cardHeaderTitle: {
        fontWeight: "600",
        fontSize: 20,
        color: colors.blue
    },

    cardBtn: {
        position: 'relative',
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: colors.blue,
        borderRadius: 6,
    },

    btnText: {
        color: colors.white

    },

    tableHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    columnTitle: {
        fontWeight: "600",
        paddingBottom: 6,
        // flex: 1,
        justifyContent: 'space-between'
    },

    textRight: {
        flex: 1,
        color: colors.gray,
        alignItems: "flex-start"
    },

    columnTitle_status: {

    },

    tableColumn: {
        paddingBottom: 6,
        // justifyContent: 'space-between',
        flex: 1,
        alignItems: "flex-start"
    },

    table: {
        marginTop: 10
    },

    listItem: {

    },

    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },


})