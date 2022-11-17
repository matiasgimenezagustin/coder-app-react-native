import React  from "react";
import { Text, StyleSheet, View ,TextInput, Button} from "react-native";

const StartGameScreen = () =>{
    return (
        <View style={styles.screen}>
            <View style={styles.inputContainer}>
                <Text>Elije un numero</Text>
                <TextInput/>
                <View style={styles.buttonContainer}>
                    <Button title="Limpiar"/>
                    <Button title="Start"/>
                </View>
            </View>
        </View>
    )
}
export default StartGameScreen
const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding: 10,
        alignItems: "center",
        marginTop: 50,
    },
    inputContainer:{
        width:300,
        alignItems: "center",
    },
    buttonContainer:{
        flexDirection: "row"
    }
})