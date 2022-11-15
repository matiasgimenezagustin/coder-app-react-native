import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList} from 'react-native';
import { useState } from 'react';

import StartGameScreen from './componets/StartGrameScreen';
import Header from './componets/Header';
import ItemsList from './componets/ItemsList';


export default function App() {
  


  return (
    <View style={{flex: 1}} >
      <ItemsList/>
    </View>
  );
}

