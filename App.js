import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList} from 'react-native';
import { useState } from 'react';

/* import StartGameScreen from './components/StartGrameScreen';
import Header from './components/Header';
 */
import ItemsListControler from './components/ItemListControler';


export default function App() {
  
  const [tasksList, setTaskList] = useState({})

  return (
    <View style={{flex: 1}} >
      <ItemsListControler/>
    </View>
  );
}

