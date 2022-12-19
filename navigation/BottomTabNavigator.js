import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Ionicons from "@expo/vector-icons/Ionicons"
import FavoritesNavigator from './FavoritesNavigator'
import ShopNavigator from './ShopNavigator'
import colors from '../constants/colors'


const ButtomTab = createBottomTabNavigator()

const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
        <ButtomTab.Navigator screenOptions={{tabBarShowLabel: false, headerShown: false, tabBarStyle: styles.tabBar}} initialRouteName="CardTab">
            <ButtomTab.Screen name="CardTab" component={ShopNavigator} options={
              {
                tabBarIcon: ({focus}) => (
                  <View style={styles.icon}>
                    <Ionicons name="albums-outline" size={25} color={colors.verdeClaro}/>
                  </View>
                )
              }
            }/>
            <ButtomTab.Screen name="FavoritesTab" component={FavoritesNavigator} options={
              {
                tabBarIcon: ({focus}) => (
                  <View style={styles.icon}>
                    <Ionicons name="bookmarks-outline" size={25} color={colors.verdeClaro} />
                  </View>
                )
              }
            } />
        </ButtomTab.Navigator>
    </NavigationContainer>
  )
}

export default BottomTabNavigator

const styles = StyleSheet.create({
    tabBar:{
        backgroundColor: colors.verdeOscuro,
        elevation: 5,
        shadowRadius: 0.5
    },
    icon: {
      flex: 1,
      color: "red",
      justifyContent: "center",
      alignItems: "center"
    }
})
