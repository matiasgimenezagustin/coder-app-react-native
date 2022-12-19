import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { BackgroundWithNothing } from '../../components/Background'
import Card from '../../components/Card'
import { CustomText } from '../../components/Customs'

const ProductDetailScreen = ({route}) => {
  const {item} = route.params
  return (
    <BackgroundWithNothing>
      <Card height={750}>
        <Image source={{uri: item.image}} style={{width: 300, height: 450}}/>
        <View>
          <CustomText content={item.descripcion}/>
        </View>
      </Card>
    </BackgroundWithNothing>
  )
}

export default ProductDetailScreen

const styles = StyleSheet.create({})