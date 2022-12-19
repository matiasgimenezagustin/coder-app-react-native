import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import colors from '../constants/colors'
import dimensions from '../constants/screenDimensions'
import LevelStar from './LevelStar'

const CardView = ({item, handlePressCard}) => {
  return (
    <View style={styles.card}>
      <View style={{flex: 1, justifyContent: "space-around"}}>
        <View>
          <Text style={styles.name}>{item.name}</Text>
        </View>
        <>
        {
          item.nivel >= 1 
        ?
          (
          <View style={{gap: 40}}>
            
            <Text style={styles.name}>Ataque: {item.ataque}</Text>
            <Text style={styles.name}>Defensa: {item.defensa}</Text>
            <Text style={styles.name}>Especie: {item.tipo}</Text>
            <View style={{flexDirection: "row"}}>
              <Text style={styles.name}>Nivel: </Text>
              <LevelStar level={item.nivel}/>
            </View>
          </View>
          ) 
          : 
          <View style={{flexDirection: "row"}}>
            <Text style={styles.name}>{item.descripcion.length > 100 ? item.descripcion.substring(0, 100)+ "...Ver mas": item.descripcion }</Text>
          </View>
        }
        </>
      </View>
      <Pressable onPress={(item) =>handlePressCard(item)}>
        <Image source={{uri: item.image}} style={{ width: 100, height: 145, alignSelf:"center" }}/>
      </Pressable>
    </View>
  )
}

export default CardView

const styles = StyleSheet.create({
  card:{
    width: dimensions.width / 1.1, 
    justifyContent: "space-between", 
    backgroundColor: colors.verde,
    padding:10,
    borderRadius: 5,
    elevation: 5,
    marginVertical: 5,
    height: 200,
    flexDirection: "row"
  },
  name: {
    fontSize:14,
    fontFamily: "poppins",
    color: colors.verdeMuyOscuro
  }
})