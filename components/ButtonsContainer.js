import { StyleSheet, View } from 'react-native'
import React from 'react'

export default function ButtonsContainer({children}) {
  return (
    <View style={styles.buttonsContainer}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({

    buttonsContainer:{
        flexDirection: "row",
        width: "60%",
        justifyContent: "space-between",
        
    },
})