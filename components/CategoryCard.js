import { StyleSheet, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { CustomText } from './Customs'
import dimensions from '../constants/screenDimensions'
import colors from '../constants/colors'

const CategoryCard = ({item, onSelected}) => {
  return (

      <View style={{...styles.card, backgroundColor: item.color}}>
        <TouchableOpacity onPress={() => onSelected(item)} style={{height: "100%"}}>
          <View style={styles.internalCard}>
              <CustomText content={"Ir a " + item.name}/>
          </View>
        </TouchableOpacity>
      </View>

  )
}

export default CategoryCard

const styles = StyleSheet.create({
    card:{
        width: dimensions.width / 1.1, 
        alignItems: "center", 
        justifyContent: "space-around", 
        marginVertical: 5,
        borderRadius: 5,
        elevation: 5,
        height: 110,
    },
    internalCard:{
      alignItems: "center", 
      justifyContent: "space-around", 
      height: "100%",
    }
})