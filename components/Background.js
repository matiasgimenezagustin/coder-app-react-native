import { StyleSheet, View, TouchableWithoutFeedback, Keyboard  } from 'react-native'
import React from 'react'
import colors from '../constants/colors'



export default function Background({children}) {
  

  return (
    <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss()}>
        <View style={styles.screen}>
        {children}
        </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({

    screen:{
        backgroundColor: colors.verdeClaro,
        flex: 1,
        alignItems: 'center',
    },
})