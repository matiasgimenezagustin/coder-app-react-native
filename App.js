import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import { useState } from 'react';
import {useFonts} from "expo-font"
import { Provider } from 'react-redux';
import store from './store';
import ItemsListControler from './components/ItemListControler';
import Navbar from './components/Navbar';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import ResultScreen from './screens/ResultScreen';
import ShopNavigator from './navigation/ShopNavigator';
import BottomTabNavigator from './navigation/BottomTabNavigator';



export default function App() {

    const [fontLoaded] = useFonts({
        poppins: require("./assets/fonts/Poppins-Black.ttf")
    })
    
    const [numberSelected, setNumberSelected ] = useState()
    const [winOrLose, setWinOrLose] = useState(false)
    const [result, setResult] = useState("")
    const handleStartGame = (selectedNumber) => {
        setNumberSelected(selectedNumber)
    }

    const handleRestartGame = () =>{
        setNumberSelected()
        setWinOrLose(false)
        setResult("")
    }
    const handleFinishGame = ( selection, number) => {
        if((selection === "lower" && number < numberSelected) || ( selection === "greater" && number >  numberSelected)){
            setResult("win")
        }else{
            setResult("lose")
        }
        setWinOrLose(true)
    }

    let content = <StartGameScreen onStartGame={handleStartGame}/>
    if(numberSelected && winOrLose){
        content = <ResultScreen result={result} handleRestart={handleRestartGame}/>
    }else if (numberSelected){
        content = <GameScreen handleResult={handleFinishGame}/>
    }

    if(!fontLoaded){
        return null
    }

    /* <Navbar navTitle={"Adivina el Numero"}/>
            {content} */
    return (
        <Provider store={store}>
            <BottomTabNavigator/>
        </Provider>
    );
}
<Navbar navTitle={"Adivina el Numero"}/>
