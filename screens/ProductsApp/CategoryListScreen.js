import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background from '../../components/Background'
import { CustomTitle } from '../../components/Customs'
import Card from '../../components/Card'
import Boton from '../../components/Boton'
import colors from '../../constants/colors'
const CategoryListScreen = ({navigation}) => {
  return (
    <Background>
      <CustomTitle content={"Lista de productos"}/>
      <Card height={200}>
        <Boton title={"Seleccionar"} funcion={() => navigation.navigate("Productos")} color={colors.verdeClaro} bgColor={colors.verdeMuyOscuro}/>
      </Card>
    </Background>
  )
}

export default CategoryListScreen

const styles = StyleSheet.create({})