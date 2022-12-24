import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { BackgroundWithNothing } from '../../components/Background'
import Card from '../../components/Card'
import { CustomText } from '../../components/Customs'
import { useSelector, useDispatch, connect } from 'react-redux'
import Boton from '../../components/Boton'
import colors from '../../constants/colors'
import { addFavorite } from '../../store/actions/favorites.action'

const ProductDetailScreen = ({route}) => {
  /* const {item} = route.params */

  const item = useSelector(state => state.cards.selected)
  const dispatch = useDispatch()
  return (
    <BackgroundWithNothing>
      <Card height={750}>
        <Image source={{uri: item.image}} style={{width: 300, height: 450}}/>
        <View>
          <Boton title={"Guardar"} bgColor={colors.verdeOscuro} color={colors.verdeClaro} funcion={()=> dispatch(addFavorite(item.id))}/>
          <CustomText content={item.descripcion}/>
        </View>
      </Card>
    </BackgroundWithNothing>
  )
}

export default connect()(ProductDetailScreen)

const styles = StyleSheet.create({})