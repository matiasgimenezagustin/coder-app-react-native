import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {BackgroundWithNothing} from '../../components/Background'
import { CustomText } from '../../components/Customs'
import Card from '../../components/Card'
import Boton from '../../components/Boton'
import colors from '../../constants/colors'
import cards from "../../data/cards"
import CardView from '../../components/CardView'

const ProductsListScreen = ({navigation, route}) => {
  const {category, categoryId} = route.params
  //obtenemos el titulo de la categoria mediante los params de la route
  console.log(cards[0].id, categoryId)
  const filterCards = () => cards.filter( (card) => card.categoryId == categoryId)

  const [filteredCards, setFilteredCards] = useState(filterCards())

  
  const handlePressCard = (item) =>{ navigation.navigate("detalle", {
    item: item})
    
  }
  const renderCard = ({ item }) =>(
    <CardView item={item} handlePressCard={() => handlePressCard(item)}/> 
  )
  return (
    <BackgroundWithNothing newStyles={{paddingVertical: 20}}>
      <CustomText content={"Cartas"}/>
      <View style={{ flex:1}}>
        
        <FlatList 
        data={filteredCards}
        keyExtractor={(item) => item.id}
        renderItem={renderCard}
        scrollEnabled={true}
        />
      </View>
    </BackgroundWithNothing>
  )
}

export default ProductsListScreen

const styles = StyleSheet.create({})