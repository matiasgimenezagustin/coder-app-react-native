import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../constants/colors'

export default function Card({children}) {
  return (
    <View style={styles.card}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
    card:{
        width: "100%", 
        alignItems: "center", 
        justifyContent: "space-around", 
        height: 300,
        backgroundColor: colors.verde,
        padding:5,
        borderRadius: 5,
        elevation: 5
    }
})