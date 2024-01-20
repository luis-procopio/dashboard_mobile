import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { View, Text, TouchableOpacity, TextInput, Image, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Dashboard } from './screen/dashboard';

const App = () => {
  const [isNavigationActive, setNavigationActive] = useState(false);

  const toggleNavigation = () => {
    setNavigationActive(!isNavigationActive);
  };

  const activateLink = () => {
    // Implementar a lógica para adicionar a classe 'hovered' quando o link for ativado
  };

  return (
    <>
      <StatusBar style='auto'></StatusBar>
      <Dashboard/>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height:'90%'
  },
  navigation: {
    width: 200,
    height: '100%',
    backgroundColor: '#287bff',
    borderLeftWidth: 10,
    borderColor: '#287bff',
    // transition: '0.5s',
    overflow: 'hidden',
  },
  activeNavigation: {
    width: 80,
  },
  listItem1: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  icon: {
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    color: 'white',
  },
  main: {
    position: 'absolute',
    width: '100%',
    left: 300,
    minHeight: '100%',
    backgroundColor: 'white',
    // transition: '0.5s',
    padding: 20,
  },
  activeMain: {
    width: '100%',
    left: 80,
  },
  topbar: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 0,
  },
  toggle: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 25,
    // cursor: 'pointer',
  },
  search: {
    width: 400,
    margin: 0,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    padding: 5,
    marginRight: 10,
  },
  input: {
    flex: 1,
    marginRight: 5,
  },
  user: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  userImage: {
    width: '100%',
    height: '100%',
  },
  // ...restante do estilo conforme necessário
  cardBox: {
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'space-between',
    // cursor: 'pointer',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  numbers: {
    // fontWeight: '500',
    // // fontSize: 25,
    // color: '#287bff',
  },
  cardName: {
    color: '#999',
    fontSize: 14,
    marginTop: 5,
  },
  iconBx: {
    // fontSize: 25,
    // color: '#999',
  },
  details: {
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  recentOrders: {
    display: 'flex',
    minHeight: 500,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  h2: {
    fontWeight: '600',
    color: '#287bff',
  },
  btn: {
    padding: 5,
    color: 'white',
    backgroundColor: '#287bff',
    borderRadius: 6,
    // textDecoration: 'none',
  },
  table: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  th: {
    fontWeight: '600',
    paddingBottom: 5,
  },
  tr: {
    color: 'black',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  td: {
    padding: 10,
  },
  tdLast: {
    textAlign: 'right',
  },
  tdSecond: {
    textAlign: 'center',
  },
  statusDelivered: {
    backgroundColor: '#8de02c',
    padding: 2,
    borderRadius: 4,
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  statusPending: {
    backgroundColor: '#f9ca3f',
    padding: 2,
    borderRadius: 4,
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  statusReturn: {
    backgroundColor: '#f00',
    padding: 2,
    borderRadius: 4,
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  statusInProgress: {
    backgroundColor: '#1795ce',
    padding: 2,
    borderRadius: 4,
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  recentCustomers: {
    display: 'flex',
    minHeight: 500,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  imgBx: {
    height: 40,
    width: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  img: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  h4: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 1.2,
  },
  span: {
    fontSize: 14,
    color: '#999',
  },
});

export default App;
