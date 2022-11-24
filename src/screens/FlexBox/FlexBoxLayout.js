import { Image, StyleSheet, Text, View} from 'react-native'
import React from 'react'

const FlexBoxLayout = () => {
    return (
        <React.Fragment>
          <View style={styles.container}>
            <Image
              resizeMode='contain'
              style={styles.image}
              source={{uri:'https://randomuser.me/api/portraits/lego/5.jpg'}}
            />
            <Text style={styles.nameText}>Nguyen</Text>
          </View>
          <View style={styles.footer}></View>
        </React.Fragment>
    )
}

export default FlexBoxLayout

const styles = StyleSheet.create({
    container:{
      // backgroundColor:'#fff',
      display:'flex',
      // flex:1,
      backgroundColor:'red'
    },
    image:{
      width:250,
      height:250,
      borderRadius:125,
      borderWidth:5,
      borderColor:'#4cfcf3',
      marginBottom:20
    },
    nameText:{
      fontSize:30,
      fontWeight:'bold'
    },
    footer:{
      flex:1,
      backgroundColor:'blue',
    }
})