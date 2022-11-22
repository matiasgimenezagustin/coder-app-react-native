import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import colors from '../constants/colors'

export default function Navbar({navTitle}) {
  return (
    <View style={styles.navbar}>
      <Text style={styles.navTitle}>{navTitle}</Text>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo.png")} style={styles.logo}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

    navbar:{
        height: 100,
        backgroundColor: colors.verdeMuyOscuro,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        paddingTop: 30,
        paddingHorizontal: 15,
    },
    logoContainer:{
      flex: 3,
      alignItems: "flex-end"
    },
    logo:{
      width: 50,
      height: 50,
      borderColor: colors.verdeClaro,
      borderStyle: "solid",
      borderWidth: 2,
      borderRadius: 50
    },
    navTitle:{
      flex: 2,
      textAlign: "center",
      color: colors.verdeClaro,
      fontSize: 18,
      fontWeight: "900"
    },
})