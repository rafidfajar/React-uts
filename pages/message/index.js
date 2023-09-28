import { View, Text,TouchableOpacity,StyleSheet,SafeAreaView,ScrollView,Image,TextInput } from 'react-native';
import React, { useEffect } from 'react';
import {MaterialCommunityIcons, Ionicons} from 'react-native-vector-icons';

import {

profil4,
  profil2,
  profil3
} from '../../assets'


function MessageScreen({ navigation }) {
  useEffect(() => {
    // Set navigation options dynamically
    navigation.setOptions({
      headerTitle: () => (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: 18, marginRight: 8 }}>Message</Text>
        </View>
      ),
    });
  }, []); 
    return (
      <SafeAreaView style={style.safeArea}>
      <ScrollView>
        <View style={style.container} >
            <View style={style.row}>
            <View style={style.inputContainer}>
            <MaterialCommunityIcons name="magnify" size={24} color="black" />
              <TextInput
             style={style.input}
             placeholder="Search"
             placeholderTextColor="gray"/>
             </View>
            </View>
            <TouchableOpacity>
        <View style={[style.row, {marginTop:30}]}>
        <View >
        <Image source={profil3} style={style.circularImage} />
        </View>
        <View style={[style.textContainer, {marginLeft:20}]}>
          <Text style={style.followText}>audyselfr</Text>
          <Text style={style.postsText}>Active 10m ago</Text>
        </View>
      </View>
      </TouchableOpacity>
      
      <TouchableOpacity>
      <View style={[style.row, {marginTop:30}]}>
       
        <View >
        <Image source={profil2} style={style.circularImage} />
        </View>
       
        <View style={[style.textContainer, {marginLeft:20}]}>
          <Text style={style.followText}>alfredosmrt</Text>
          <Text style={style.postsText}>Active 21m ago</Text>
        </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={[style.row, {marginTop:30}]}>
        
        <View >
        <Image source={profil4} style={style.circularImage} />
        </View>
       
        <View style={[style.textContainer, {marginLeft:20}]}>
          <Text style={style.followText}>rahutstmpl</Text>
          <Text style={style.postsText}>Active 30m ago</Text>
        </View>
      </View>
      </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white', // Set the background color for the entire screen
  },
    container:{
        margin: 18,
    },

    row: {
    
      flexDirection: 'row',
      alignItems: 'center',
    },
    textContainer: {
      flexDirection: 'column',
      marginRight:20,
      alignItems: 'left',
      justifyContent: 'flex-end',
    },
    followText: {
      fontSize: 17,
      fontWeight: 'bold',
    },
    postsText: {
      fontSize: 14,
    
    },
    circularImage: {
      width: 65, // Set the width of the image
      height: 65, // Set the height of the image
      borderRadius: 50, // Half of the width and height to create a circular shape
      // Border color
   
    },
    button:{
        marginRight:5,
        height: 30, // Set the height of the button
        backgroundColor: '#e6e6e6', // Example background color
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
      },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'gray',
        borderRadius: 5,
        marginTop: 10,
        paddingHorizontal:10,
        backgroundColor: '#e6e6e6',
      },
  
      input: {
        flex: 1,
        height: 40,
        color: 'black',
        marginLeft:15,
      },
  
})
 
  
 

export default MessageScreen;
