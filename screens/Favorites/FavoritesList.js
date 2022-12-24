import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { BackgroundWithNothing } from '../../components/Background'
import CardView from '../../components/CardView'
import { CustomTitle } from '../../components/Customs'
import { useSelector, useDispatch, connect } from 'react-redux'
import { deleteFavorite } from '../../store/actions/favorites.action'

const FavoritesList = ({navigation}) => {
    const favorites = useSelector(state => state.favorites.favorites)
    const dispatch = useDispatch()
    console.log(favorites)
    
    const handlePressCard = (item) =>{ navigation.navigate("detalle", {
        item: item})
        
    }

    const handleDelete = (item) =>{
        console.log("eliminado el ", item.id)
        dispatch(deleteFavorite(item.id))
    }

    const renderCard = ({ item }) =>(
        <CardView item={item} handlePressCard={() => handlePressCard(item)} handleDelete={()=> handleDelete(item)}/> 
    )
  return (
    <BackgroundWithNothing>
            <CustomTitle content={"Mis Favoritas"}/>
            <View style={{flex:1}}>
                {
                favorites.length >= 1 ?
                <FlatList
                data={favorites}
                keyExtractor={(item) => item.id}
                
                renderItem={renderCard}
                />: <Text>Aun no hay favoritos..</Text>
                }
                
            </View>
            
        

    </BackgroundWithNothing>
  )
}

export default connect()(FavoritesList)

const styles = StyleSheet.create({})