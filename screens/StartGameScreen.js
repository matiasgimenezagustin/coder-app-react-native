import { StyleSheet, Text, View, TextInput, Button, Keyboard, TouchableWithoutFeedback  } from 'react-native'
import {useState} from 'react'
import Boton from '../components/Boton';
import Card from '../components/Card';
import colors from '../constants/colors';
import {useFonts} from "expo-font"



export default function StartGameScreen() {
    
    const [fontLoaded] = useFonts({
      poppins: require("../assets/fonts/Poppins-Black.ttf")
    })
    const [ numberSelected, onNumberSelected ] = useState("")

    const [isConfirmed, setIsConfirmed] = useState(false)

    const [ numberConfirmed, setNumberConfirmed] = useState("")

    const [ error, setError] = useState({
        invalid: false,
        msg: "Error: El numero es mayor a 30!"
    })
    

    const handleConfirm = () =>{
        !error.invalid ?  Keyboard.dismiss() : null
        
        if(numberSelected === NaN || numberSelected <= 0 || numberSelected > 30 ) return 
            
        setNumberConfirmed(numberSelected)
        setIsConfirmed(true)
        
    }
    const handleNumber = ( number ) =>{
        if(number > 30){
            setError(currentValue =>({...currentValue , invalid: true}))
        }else{
            setError(currentValue => ({...currentValue, invalid: false}))
        }
        onNumberSelected(number.replace(/[^0-9]/g, ""))


        
        console.log(error.invalid)
    }

    const handleResetInput = () =>{
        onNumberSelected("")
        setIsConfirmed(false)
    }
    
    if(!fontLoaded){
        return null
    }
  return (
    <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss()}>

    
      <View style={styles.screen}>
        <Text style={[{fontFamily:"poppins"}, styles.title]}>¿Preparado para empezar?</Text>
        <Card  height={300}>
          <Text style={styles.mensaje}>Elije un numero del 1 al 30</Text>
            {error.invalid && <Text style={styles.mensaje}>{error.msg}</Text> }
            <TextInput style={styles.inputText} keyboardType="numeric" autoCapitalize="none" blurOnSubmit autoCorrect={false}  value={numberSelected} placeholder=" 1 - 30 " onChangeText={handleNumber} textAlign="center"  maxLength={2}/>

          <View style={styles.buttonsContainer}>
            <Boton color={colors.verdeClaro} bgColor={colors.verdeOscuro} title="Borrar" funcion={ handleResetInput }/>
            <Boton color={colors.verdeClaro} bgColor={colors.verdeOscuro} title="Confirmar" funcion={ handleConfirm }/>
          </View>
        </Card>
        {isConfirmed && !error.invalid && 
        <Card  height={125} >
            <Text style={styles.mensaje}>Tu numero es: {numberConfirmed}</Text>
            <Boton color={colors.verdeClaro} bgColor={colors.verdeOscuro} title="Empezar Juego" funcion={ handleResetInput }/>
        </Card>
      }
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
        fontWeight: "bolder"
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