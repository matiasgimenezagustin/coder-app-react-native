import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import Background from '../../components/Background'
import { CustomTitle } from '../../components/Customs'
import CategoryCard from '../../components/CategoryCard'
import { useSelector, useDispatch, connect } from 'react-redux'
import { categorySelected } from '../../store/actions/categories.action'
const CategoryListScreen = ({navigation}) => {

    const categories = useSelector((state) => state.categories.categories)
    const dispatch = useDispatch()
    const handleSelectCard = ( item ) =>{
        dispatch(categorySelected(item.id))
        navigation.navigate("Productos", {
            categoryName: item.name
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

export default connect()(CategoryListScreen)

const styles = StyleSheet.create({})

 {/* <Card height={200}>
        <Boton title={"Seleccionar"} funcion={() => navigation.navigate("Productos")} color={colors.verdeClaro} bgColor={colors.verdeMuyOscuro}/>
      </Card> */}