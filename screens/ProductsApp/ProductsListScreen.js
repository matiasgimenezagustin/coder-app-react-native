import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {BackgroundWithNothing} from '../../components/Background'
import { CustomText } from '../../components/Customs'
import Card from '../../components/Card'
import Boton from '../../components/Boton'
import colors from '../../constants/colors'
import { connect, useDispatch, useSelector} from 'react-redux'
import CardView from '../../components/CardView'
import { selectedCard } from '../../store/actions/cards.action'


const ProductsListScreen = ({navigation}) => {
  const dispatch = useDispatch()


  
  const cards = useSelector(state => state.cards.cards)
  const categoryID = useSelector(state => state.categories.selected)


  const filterCards = () => cards.filter( (card) => card.categoryId == categoryID)

  const [filteredCards, setFilteredCards] = useState(filterCards())

  
  const handlePressCard = (item) =>{ 
      dispatch(selectedCard(item.id))
      navigation.navigate("detalle", {
        item: item
      }
    )
    
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

export default connect()(ProductsListScreen) 

const styles = StyleSheet.create({})