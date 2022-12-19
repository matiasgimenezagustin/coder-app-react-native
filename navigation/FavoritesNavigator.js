import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import colors from '../constants/colors'
import FavoritesList from '../screens/Favorites/FavoritesList'
//creamos un stack, el mismo lo podemos consumir como componente
const Stack = createNativeStackNavigator()




const FavoritesNavigator = () => {
  return (

        <Stack.Navigator screenOptions={{
          headerStyle:{
            backgroundColor: colors.verdeOscuro
          },
          headerTintColor: colors.verdeClaro
        }}>
            <Stack.Screen name='Favoritas' component={FavoritesList} />
            
        </Stack.Navigator>

  )
}

export default FavoritesNavigator
