import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background from '../../components/Background'
import { CustomTitle } from '../../components/Customs'
import Card from '../../components/Card'
import Boton from '../../components/Boton'
import colors from '../../constants/colors'

const ProductsListScreen = ({navigation}) => {
  return (
    <Background>
      <CustomTitle content={"Producto"}/>
      <Card height={300}>
        <Boton title={"Ver mas"} color={colors.verdeClaro} bgColor={colors.verdeMuyOscuro} funcion={() => navigation.navigate('Detalle de producto')}/>
      </Card>
    </Background>
  )
}

export default ProductsListScreen

const styles = StyleSheet.create({})