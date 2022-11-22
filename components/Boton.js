import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Boton({title, color, bgColor, funcion}) {
  return (
    <Pressable style={[{backgroundColor: bgColor }, styles.button]} onPress={funcion}>
      <Text style={{fontSize: 16, color: color, fontWeight: "700"}}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button:{
    padding: 10,
    borderRadius: 5,
  }
})