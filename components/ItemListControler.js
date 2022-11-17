import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Modal, Alert} from 'react-native';
import { useState } from 'react';

const ItemsListControler = () => {



    const [products, setProducts] = useState([])
    const [textInput, setTextInput] = useState("")
    const [textInputDelete, setTextInputDelete] = useState("")
    const [modalVisible, setModalVisible] = useState(false)
    const [deleteAllModal, setDeleteAllModal] = useState(false)
    const [itemSelect, setItemSelect] = useState({})

    const getTimeNow = () => {
        let fecha = new Date()
        return `[${fecha.getHours()}:${fecha.getMinutes()}]`
    }
    const onHandleChangeProduct = (text) =>{
        setTextInput(text)
    }

    const onHandleChangeDeleteProduct = ( text ) =>{
        setTextInputDelete(text)
    }

    const addItem = () =>{
        
        setProducts(currentItems => [
        ...currentItems, {id: Math.random().toString(), value: textInput, fecha: getTimeNow()}
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
    const deleteAllItems = () =>{
        setProducts([])
        setDeleteAllModal(false)
    }

    const selectedItem = (id) =>{
        setItemSelect(products.find((product)=> product.id === id ))
        setModalVisible(true) 
    }

    const renderProduct = ({item}) => (    
        <View style={{borderBottomWidth: 1, borderButtomColor: "black", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10, paddingVertical: 3}} >
            <Text style={{color: "black"}}>{item.value}</Text>
            <Text style={{color: "black"}}>{item.fecha}</Text>
            <Button title='x' color={"#AC1B1B"} onPress={ () => {selectedItem( item.id ) }}/>
        </View>
    )


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Añade tus tareas</Text>
            <View style={{ gap: 20}}>
                <View style={{gap: 10}}>
                    <TextInput value={textInput} style={{backgroundColor: "white", borderRadius: 3, padding: "10px"}}  placeholder="Escribe un nuevo item" onChangeText={onHandleChangeProduct}/>
                    <Button title="ADD" color={"#AC1B1B"} onPress={addItem}/>
                </View>
                <View style={{gap: 10}}>
                    <TextInput value={textInputDelete}  style={{backgroundColor: "white", borderRadius: 3, padding: "10px"}} placeholder="Elimina un item" onChangeText={onHandleChangeDeleteProduct}/>
                    <Button title="DELETE" color={"#AC1B1B"} onPress={deleteItemByValue}/>
                </View>
                <View style={{gap: 10}}>
                    
                    <Button title="RESET" color={"#AC1B1B"} onPress={() =>{ setDeleteAllModal(true)}}/>
                </View>
            </View>
            <View style={{backgroundColor: "white", width: "90%", marginTop: 10, padding: 5}}>
                <FlatList data={products} renderItem={renderProduct} keyExtractor={ (product) => product.id} />
            </View>

            <Modal 
                animationType='fade'
                transparent={true}
                visible={modalVisible}
                onRequestClose={ () =>{
                    Alert.alert("modal has been close")
                    setModalVisible(!modalVisible)
                }}
            >   
                <View style={{justifyContent: 'space-around', alignItems: "center", flex: 1}}>
                    <View style={{ justifyContent: 'space-around', alignItems: "center", backgroundColor: "#252628", borderRadius: 5, width: "80vw", height: "25vh"}}>
                        <Text style={{color: "white", fontSize: "1rem", textAlign: "center", padding: 2}}>¿Seguro que deseas eliminar el item?</Text>
                        <View style={{flexDirection: "row", gap: 10}}>
                            <Button title="Eliminar" color={"#AC1B1B"} onPress={() => {deleteItemById()}}/>
                            <Button title="Cancelar" color={"#AC1B1B"} onPress={() => setModalVisible(false)}/>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal 
                animationType='fade'
                transparent={true}
                visible={deleteAllModal}
                onRequestClose={ () =>{
                    Alert.alert("modal has been close")
                    setModalVisible(!modalVisible)
                }}
            >   
                <View style={{justifyContent: 'space-around', alignItems: "center", flex: 1}}>
                    <View style={{ justifyContent: 'space-around', alignItems: "center", backgroundColor: "#252628", borderRadius: 5, width: "80vw", height: "25vh"}}>
                        <Text style={{color: "white", fontSize: "1rem", textAlign: "center", padding: 2}}>¿Seguro que deseas eliminar todos los items?</Text>
                        <View style={{flexDirection: "row", gap: 10}}>
                            <Button title="Eliminar" color={"#AC1B1B"} onPress={deleteAllItems}/>
                            <Button title="Cancelar" color={"#AC1B1B"} onPress={() => setDeleteAllModal(false)}/>
                        </View>
                    </View>
                </View>
            </Modal>

            <View style={{marginTop: 10}}>
                    <Button title="Mostrar lista" color={"#AC1B1B"} onPress={() =>{
                        let fecha = new Date()
                        console.log(fecha)
                        }}/>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}

export default ItemsListControler

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

