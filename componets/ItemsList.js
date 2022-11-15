import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Modal, Alert} from 'react-native';
import { useState } from 'react';

const ItemsList = () => {

    const [products, setProducts] = useState([])
    const [textInput, setTextInput] = useState("")
    const [textInputDelete, setTextInputDelete] = useState("")
    const [modalVisible, setModalVisible] = useState(false)

    const [itemSelect, setItemSelect] = useState({})

    const onHandleChangeProduct = (text) =>{
        setTextInput(text)
    }

    const onHandleChangeDeleteProduct = ( text ) =>{
        setTextInputDelete(text)
    }

    const addItem = () =>{
        
        setProducts(currentItems => [
        ...currentItems, {id: Math.random().toString(), value: textInput }
        ])
        setTextInput("")
    }

    const deleteItemByValue = () =>{
        setProducts(products.filter( item => item.value != textInputDelete))
        setTextInputDelete("")
    }
    const deleteItemById = () =>{
        setProducts( products.filter((product) => product.id !== itemSelect.id ))
        setItemSelect({})
        setModalVisible(false)
    }

    const selectedItem = (id) =>{
        setItemSelect(products.find((product)=> product.id === id ))
        setModalVisible(true) 
    }

    const renderProduct = ({item}) => (    
        <View style={{borderBottomWidth: 1, borderButtomColor: "black", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10, paddingVertical: 3}} >
            <Text style={{color: "black"}}>{item.value}</Text>
            <Button title='x' onPress={ () => {selectedItem( item.id ) }}/>
        </View>
    )


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hola, Coder!</Text>
            <View style={{ gap: 20}}>
                <View style={{gap: 10}}>
                    <TextInput value={textInput} style={{backgroundColor: "white", borderRadius: 3, padding: "10px"}}  placeholder="Escribe un nuevo item" onChangeText={onHandleChangeProduct}/>
                    <Button title="ADD" onPress={addItem}/>
                </View>
                <View style={{gap: 10}}>
                    <TextInput value={textInputDelete}  style={{backgroundColor: "white", borderRadius: 3, padding: "10px"}} placeholder="Elimina un item" onChangeText={onHandleChangeDeleteProduct}/>
                    <Button title="DELETE" onPress={deleteItemByValue}/>
                </View>
            </View>
            <View style={{backgroundColor: "white", width: "90%", marginTop: 10, padding: 5}}>
                <FlatList data={products} renderItem={renderProduct} keyExtractor={ (product) => product.id} />
            </View>

            <Modal 
            /* Animacion slide hace una animacion de que sube y baja, la animacion fade hace la animacion de ocultar */
                animationType='fade'
                transparent={true}
                visible={modalVisible}
                onRequestClose={ () =>{
                    Alert.alert("modal has been close")
                    setModalVisible(!modalVisible)
                }}
            >
                <View style={{flex: 2}}>
                    <Text style={{color: "green"}}>Hello</Text>
                    <Button title="Eliminar" onPress={() => {deleteItemById()}}/>
                    <Button title="Cancelar" onPress={() => setModalVisible(false)}/>
                </View>

            </Modal>
            <StatusBar style="auto" />
        </View>
    )
}

export default ItemsList

const mainColors = {
    black: "#181818",
    white: "white"
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: mainColors.black,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: mainColors.white,
        fontSize: "2.5rem",
    }
});

/* No poner llaves despues de la flecha */
/* products.map((product) =>(
  <View style={{flex: 2}}>
    <Text style={{color: "white"}}>{product.value}</Text>
  </View>
)) */