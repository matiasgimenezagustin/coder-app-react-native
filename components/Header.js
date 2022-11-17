import React  from "react";
import { Text, StyleSheet, View } from "react-native";

const Header = ({title}) =>{
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )
}
export default Header
const styles = StyleSheet.create({
    header:{
        backgroundColor: "red",
        heigth: 90,
        paddingTop: 36,
        textAling: "center",
        justyfyContent:"center",

        
    },
    headerTitle: {
        color: "green",
        fontSize: 22,
    }
})