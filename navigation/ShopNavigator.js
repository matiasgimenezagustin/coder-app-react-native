
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CategoryListScreen from "../screens/ProductsApp/CategoryListScreen"
import ProductListScreen from "../screens/ProductsApp/ProductsListScreen"
import ProductDetailScreen from "../screens/ProductsApp/ProductDetailScreen"

//creamos un stack, el mismo lo podemos consumir como componente
const Stack = createNativeStackNavigator()




const ShopNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Categorias' component={CategoryListScreen}/>
            <Stack.Screen name='Productos' component={ProductListScreen}/>
            <Stack.Screen name='Detalle de producto' component={ProductDetailScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ShopNavigator

