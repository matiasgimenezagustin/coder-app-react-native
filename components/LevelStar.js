import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Star = () => {
  return (
    <View >
      <Image source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Silver_star.png/1069px-Silver_star.png"}} style={{width: 20, height: 20}}/>
    </View>
  )
}
const LevelStar = ({level}) => {
  console.log("hola",level)
    return (
      <View style={{flexDirection: "row"}} >
        {[...Array(level)].map((i) =>(<Star key={Math.random()}/>))}
      </View>
    )
  }

export default LevelStar

const styles = StyleSheet.create({})