import React from 'react';

import {View, Text,  Image, StyleSheet, Dimensions} from 'react-native';



const NewsBanner = ({title, descp, imageurl,  paper, time}) =>{
    return(
        <View style={styles.container}> 
        
            <View  style={styles.row}>
                <View style={{flex:1.3, justifyContent:'space-between', paddingLeft:5}}>
                    <Text style={styles.tit}>{title}</Text> 
                    <Text style={styles.des}>{descp}</Text> 
                    <View style={styles.row}>
                        <Text>{paper}</Text> 
                        <Text>{time}</Text> 
                    </View>
                </View>
                <View style={{flex:1, margin:5}}>
                    <Image
                        source= {{uri: imageurl}}
                        style= {styles.img}
                    />
                </View>
            </View>
        </View>
    )
}



export default NewsBanner;

const styles = StyleSheet.create({
    img:{
        height: Dimensions.get('window').height * 0.20, 
         
        borderRadius: 5,
        resizeMode:'contain',
        
      },

      container:{
          borderWidth:1,
          borderColor:'gray',
          marginBottom:5,
          height: Dimensions.get('window').height * 0.25, 
          borderRadius: 5,
          
      },

     row:{
         flexDirection:'row',
         
        
     },
     des:{
         fontWeight: 'bold',
         fontSize:18
     },
     tit:{
         marginBottom:5
     }
})