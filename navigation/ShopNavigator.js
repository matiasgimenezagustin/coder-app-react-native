
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CategoryListScreen from "../screens/ProductsApp/CategoryListScreen"
import ProductListScreen from "../screens/ProductsApp/ProductsListScreen"
import ProductDetailScreen from "../screens/ProductsApp/ProductDetailScreen"
import colors from '../constants/colors'

//creamos un stack, el mismo lo podemos consumir como componente
const Stack = createNativeStackNavigator()




const ShopNavigator = () => {
  return (

      <Stack.Navigator screenOptions={{
          headerStyle:{
            backgroundColor: colors.verdeOscuro
          },
          headerTintColor: colors.verdeClaro
        }}>
            <Stack.Screen name='Categorias' component={CategoryListScreen} />
            <Stack.Screen name='Productos' component={ProductListScreen} options={({route}) => ({title: route.params.category})}></Stack.Screen>
            <Stack.Screen name='detalle'component={ProductDetailScreen}/>
        </Stack.Navigator>
  )
}

export default ShopNavigator

