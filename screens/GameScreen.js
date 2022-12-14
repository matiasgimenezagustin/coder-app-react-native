import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Card from '../components/Card'
import Boton from '../components/Boton'
import colors from '../constants/colors'
import Background from '../components/Background'
import ButtonsContainer from '../components/ButtonsContainer'
import { CustomText, CustomTitle } from '../components/Customs'

export default function GameScreen({handleResult}) {
    const generateRandom = (max, min) => parseInt(Math.random() * (max - min) + min)
    const [currentGuessNumber, setCurrentGuessNumber] = useState(generateRandom(1, 99))
    

    return (
        <Background>
            <CustomTitle content={"El numero del oponente"}/>
            <Card height={180}>
                <CustomText content={currentGuessNumber}/>
                <ButtonsContainer>
                    <Boton color={colors.verdeClaro} bgColor={colors.verdeOscuro} title="Menor" funcion={ ()  => handleResult("lower", currentGuessNumber) }/>
                    <Boton color={colors.verdeClaro} bgColor={colors.verdeOscuro} title="Mayor" funcion={ () => handleResult("greater", currentGuessNumber) }/>
                </ButtonsContainer>
            </Card>

        </Background>
    )
}

const styles = StyleSheet.create({})