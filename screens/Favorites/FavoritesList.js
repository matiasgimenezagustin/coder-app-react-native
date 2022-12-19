import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BackgroundWithNothing } from '../../components/Background'
import favorites from '../../data/favorites'
import CardView from '../../components/CardView'
import { CustomTitle } from '../../components/Customs'

const FavoritesList = ({navigation}) => {

    const handlePressCard = (item) =>{ navigation.navigate("detalle", {
        item: item})
        
    }

    const renderCard = ({ item }) =>(
        <CardView item={item} handlePressCard={() => handlePressCard(item)}/> 
    )
  return (
    <BackgroundWithNothing>
            <CustomTitle content={"Mis Favoritas"}/>
            <View style={{flex:1}}>
                <FlatList
                data={favorites}
                keyExtractor={(item) => item.id}
                
                renderItem={renderCard}
                />
            </View>
            
        

    </BackgroundWithNothing>
  )
}

export default FavoritesList

const styles = StyleSheet.create({})