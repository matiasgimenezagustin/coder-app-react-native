import { StyleSheet, Text } from 'react-native'
import React from 'react'
import colors from '../constants/colors'

export function CustomTitle({content}) {
    return (
        <Text style={[{fontFamily:"poppins"}, styles.title]}>{content}</Text>
    )
}

export function CustomText({content, error}) {

    return (
        <>
            {error ? <Text style={[styles.text, {color: colors.rojo}]}>{content}</Text> : <Text style={styles.text} >{content}</Text> }
        </>
    )
}

const styles = StyleSheet.create({
    title:{
        color: colors.verdeOscuro,
        fontSize:24,
        marginVertical: 80,
        fontWeight: "bolder"
    },
    text:{
        color: colors.verdeMuyOscuro,
        textAlign: "center",
        fontSize:20,
        fontWeight: "800"
    },
})

