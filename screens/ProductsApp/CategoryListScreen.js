import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background from '../../components/Background'
import { CustomTitle } from '../../components/Customs'
import Card from '../../components/Card'
import Boton from '../../components/Boton'
import colors from '../../constants/colors'
import categories from '../../data/categorias'
import CategoryCard from '../../components/CategoryCard'

const CategoryListScreen = ({navigation}) => {

    const handleSelectCard = ( item ) =>{
        navigation.navigate("Productos",{
            categoryId: item.id,
            category: item.name
        })
    }
    const renderCategory = ({ item }) =>(
        <CategoryCard item={item} onSelected={ () => handleSelectCard(item)}/>
    )
    return (
        <Background>
            <CustomTitle content={"Categorias"}/>
            <View style={{flex:1}}>
                <FlatList 
                data={categories}
                keyExtractor={(item) => item.id}
                
                renderItem={renderCategory}
                />
            </View>
            
        

        </Background>
    )
}

export default CategoryListScreen

const styles = StyleSheet.create({})

 {/* <Card height={200}>
        <Boton title={"Seleccionar"} funcion={() => navigation.navigate("Productos")} color={colors.verdeClaro} bgColor={colors.verdeMuyOscuro}/>
      </Card> */}