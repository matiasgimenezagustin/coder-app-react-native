import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList} from 'react-native';
import { useState } from 'react';

import StartGameScreen from './componets/StartGrameScreen';
import Header from './componets/Header';

export default function App() {
  const [products, setProducts] = useState([])
  const [textInput, setTextInput] = useState("")

  const onHandleChangeProduct = (text) =>{
    setTextInput(text)
  }
  const addItem = () =>{
    
    setProducts(currentItems => [
      ...currentItems, {id: Math.random().toString(), value: textInput }
    ])
      setTextInput("")
      console.log(products)
  }
  const renderProduct = (product) => (
    <View style={{flex: 2}}>
      <Text style={{color: "white"}}>{product.value}</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola, Coder!</Text>
      <View>
        <TextInput value={textInput} style={{backgroundColor: "white", borderRadius: "5px", padding: "10px"}} placeholder="escribe un nuevo item" onChangeText={onHandleChangeProduct}/>
        <Button title="ADD" onPress={addItem}/>
      </View>
      <View style={{backgroundColor: "green"}}>
        <FlatList
          data={products}
          renderItem={renderProduct}
          keyExtractor={ (product) => product.id}
        />
        
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
const mainColors = {
  black: "#181818",
  white: "white"
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mainColors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: mainColors.white,
    fontSize: "2.5rem",
  }
});


/* No poner llaves despues de la flecha */
/* products.map((product) =>(
  <View style={{flex: 2}}>
    <Text style={{color: "white"}}>{product.value}</Text>
  </View>
)) */