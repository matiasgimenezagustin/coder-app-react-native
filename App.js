import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import { useState } from 'react';


import ItemsListControler from './components/ItemListControler';

import Navbar from './components/Navbar';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';


export default function App() {
  


  return (
    <View style={{flex: 1}} >
      <Navbar navTitle={"Adivina el Numero"}/>
      <StartGameScreen/>

    </View>
  );
}
<Navbar navTitle={"Adivina el Numero"}/>
