import { StyleSheet, Text,  TextInput, Keyboard } from 'react-native'
import {useState} from 'react'
import {useFonts} from "expo-font"

import Boton from '../components/Boton';
import Card from '../components/Card';
import colors from '../constants/colors';
import Background from '../components/Background';
import ButtonsContainer from '../components/ButtonsContainer';
import { CustomText, CustomTitle } from '../components/Customs';


export default function StartGameScreen({onStartGame}) {
    
    const [fontLoaded] = useFonts({
        poppins: require("../assets/fonts/Poppins-Black.ttf")
    })

    const [ numberSelected, onNumberSelected ] = useState("")

    const [isConfirmed, setIsConfirmed] = useState(false)

    const [ numberConfirmed, setNumberConfirmed] = useState("")

    const [ error, setError] = useState({
        invalid: false,
        msg: "ERROR: El numero es mayor a 30!"
    })
    

    const handleConfirm = () =>{
        !error.invalid ?  Keyboard.dismiss() : null
        
        if(numberSelected === NaN || numberSelected <= 0 || numberSelected > 30 ) return 
            
        setNumberConfirmed(numberSelected)
        setIsConfirmed(true)
        
    }
    const handleNumber = ( number ) =>{
        console.log(number)
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


        <Background>
            <CustomTitle content={"¿Preparado para empezar?"}/>
            <Card  height={300}>
                <CustomText style={styles.text} content="Elije un numero del 1 al 30"/>
                    {error.invalid && <CustomText content={error.msg} error={true} /> }
                    <TextInput style={styles.inputText} keyboardType="numeric" autoCapitalize="none" blurOnSubmit autoCorrect={false}  value={numberSelected} placeholder=" 1 - 30 " onChangeText={handleNumber} textAlign="center"  maxLength={2}/>

                <ButtonsContainer>
                    <Boton color={colors.verdeClaro} bgColor={colors.verdeOscuro} title="Borrar" funcion={ handleResetInput }/>
                    <Boton color={colors.verdeClaro} bgColor={colors.verdeOscuro} title="Confirmar" funcion={ handleConfirm }/>
                </ButtonsContainer>
            </Card>
            {isConfirmed && !error.invalid && 
            <Card  height={125} >
                <CustomText content={"Tu numero es: " + numberConfirmed}/>
                <Boton color={colors.verdeClaro} bgColor={colors.verdeOscuro} title="Empezar Juego" funcion={() => onStartGame(numberSelected) }/>
            </Card>
        }
        </Background>

    )
    }


const styles = StyleSheet.create({
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