import * as React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native'

export default function Splashscreen () {
  return (
    <View style={{backgroundColor:"#1CC2E8", flex:1}}> 
   
     <Image source={require('../assets/splashscreen.png')} style={styles.logo}/>
     
    </View>
  )
}

const styles = StyleSheet.create({
logo:{
  height: 675,
    width: 330,
    
}
});
  
