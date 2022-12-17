import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background from '../components/Background'
import { CustomTitle } from '../components/Customs'
import Card from '../components/Card'
import Boton from '../components/Boton'
import colors from '../constants/colors'


const ResultScreen = ({result, handleRestart}) => {
    
  return (
    <Background>
        <Card>
            <CustomTitle content={"Resultado " + result}/>
            <Boton title={"Volver a Jugar"}  bgColor={colors.verdeOscuro} color={colors.verdeClaro} funcion={handleRestart} />
        </Card>
    </Background>
  )
}

export default ResultScreen

const styles = StyleSheet.create({})