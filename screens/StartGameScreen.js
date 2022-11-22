import { StyleSheet, Text, View, TextInput, Button, Keyboard, TouchableWithoutFeedback  } from 'react-native'
import React,{useState} from 'react'
import Boton from '../components/Boton';
import Card from '../components/Card';
import colors from '../constants/colors';


export default function StartGameScreen() {
    
    const [ numberSelected, onNumberSelected ] = useState("")
    const handleNumber = ( number ) =>{
      onNumberSelected(number.replace(/[^0-9]/g), "")
    }
  return (
    <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss()}>

    
      <View style={styles.screen}>
        <Text style={styles.title}>¿Preparado para empezar?</Text>
        <Card style={styles.card}>
          <Text style={styles.mensaje}>Elije un numero</Text>

          <TextInput style={styles.inputText} keyboardType="numeric" autoCapitalize="none" blurOnSubmit autoCorrect={false}  value={numberSelected} placeholder=" 1 - 30 " onChangeText={onNumberSelected} textAlign="center" maxLength={2}/>

          <View style={styles.buttonsContainer}>
            <Boton color={colors.verdeClaro} bgColor={colors.verdeOscuro} title="Borrar" funcion={() =>onNumberSelected("") }/>
            <Boton color={colors.verdeClaro} bgColor={colors.verdeOscuro} title="Confirmar" funcion={() => console.log("confirmar") }/>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  )
}


const styles = StyleSheet.create({
    screen:{
        backgroundColor: colors.verdeClaro,
        flex: 1,
        padding: 15,
        alignItems: 'center',
    },
    title:{
        color: colors.verdeOscuro,
        fontSize:24,
        marginVertical: 80,
        fontWeight: "900"
    },
    buttonsContainer:{
        flexDirection: "row",
        width: "60%",
        justifyContent: "space-between",
        

    },
    mensaje:{
        color: colors.verdeMuyOscuro,
        textAlign: "center",
        fontSize:20,
        fontWeight: "800"
    },
    inputText:{
        backgroundColor: colors.verdeClaro,
        width: "30%",
        borderRadius: 5,
        fontSize: 18,
        padding: 5,
        elevation: 3,
        color: colors.verdeOscuro,
        textAlign: "center"

    },
    

})