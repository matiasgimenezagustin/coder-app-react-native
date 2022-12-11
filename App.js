import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import { useState } from 'react';


import ItemsListControler from './components/ItemListControler';

import Navbar from './components/Navbar';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';


export default function App() {
    const [numberSelected, setNumberSelected ] = useState()
    const handleStartGame = (selectedNumber) => {
        setNumberSelected(selectedNumber)
    }

    let content = <StartGameScreen onStartGame={handleStartGame}/>
    if(numberSelected){
        content = <GameScreen/>
    }
    return (
        <View style={{flex: 1}} >
            <Navbar navTitle={"Adivina el Numero"}/>
            {content}

        </View>
    );
}
<Navbar navTitle={"Adivina el Numero"}/>
