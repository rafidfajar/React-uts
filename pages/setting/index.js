import { View, Text,TouchableOpacity,StyleSheet,SafeAreaView,ScrollView,Image,TextInput,Alert } from 'react-native';
import React, { useEffect } from 'react';
import {MaterialCommunityIcons, Ionicons} from 'react-native-vector-icons';

import {
  fotoprofil
} from '../../assets'


function SettingScreen({ navigation }) {
     const showAlert = () => {
    Alert.alert(
      'Info',
      'Data Berhasil Disimpan.',
      [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Profile'),
        },
      ],
      { cancelable: false }
    );
  };
  useEffect(() => {
    // Set navigation options dynamically
    navigation.setOptions({
        headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 5, }}
              onPress={() => {
                // Custom logic when the back button is pressed
                // For example, you can navigate to a different screen
                navigation.navigate('Profile');
              }}
            >
              <MaterialCommunityIcons name="close" size={24} color="black" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{ marginLeft: 5, }}
              onPress={showAlert}
            >
              <MaterialCommunityIcons name="check" size={24} color="#1e90ff" />
            </TouchableOpacity>
          ),
      headerTitle: () => (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: 18, marginRight: 8 ,marginLeft:30}}>Edit Profile</Text>
        </View>
      ),
    });
  }, [navigation]); 
    return (
      <SafeAreaView style={style.safeArea}>
      <ScrollView>
        <View style={style.container} >
        <View style={[style.row, {marginTop:20,justifyContent:'center'}]}>
        <View >
        <Image source={fotoprofil} style={[style.circularImage]} />
        </View>
      </View>
      <View style={[style.row,{marginTop:10,justifyContent:'center'}]}>
        <TouchableOpacity>
        <Text style={[style.followText,{color:'#00bfff'}]}>Edit Picture</Text>
        </TouchableOpacity>
        </View>
        <Text style={{color:'gray',marginTop:20}}>Name</Text>
        <View style={style.row}>
            <View style={style.inputContainer}>
              <TextInput
             style={[style.input,{fontWeight:'bold'}]}
             value="rafidfajar"
             placeholderTextColor="gray"/>
             </View>
            </View>
            <Text style={{marginTop:20,color:'gray'}}>Username</Text>
            <View style={style.row}>
            <View style={style.inputContainer}>
              <TextInput
             style={[style.input,{fontWeight:'bold'}]}
             value="rafid"
             placeholderTextColor="gray"/>
             </View>
            </View>
            <Text style={{marginTop:20,color:'gray'}}>Pronouns</Text>
            <View style={style.row}>
            <View style={style.inputContainer}>
              <TextInput
             style={[style.input,{fontWeight:'bold'}]}
             value="he/him"
             placeholderTextColor="gray"/>
             </View>
            </View>
            <Text style={{marginTop:20,color:'gray'}}>Bio</Text>
            <View style={style.row}>
            <View style={style.inputContainer}>
              <TextInput
             style={[style.input,{fontWeight:'bold'}]}
             value="Junior Programmer"
             placeholderTextColor="gray"/>
             </View>
            </View>
            <TouchableOpacity>
            <Text style={[style.link,{marginTop:50}]}>Switch to profesional account</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={[style.link,{marginTop:10}]}>Profesional information setting</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={[style.link,{marginTop:10}]}>Sign up for meta verified</Text>
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
    followText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    circularImage: {
      width: 100, // Set the width of the image
      height: 100, // Set the height of the image
      borderRadius: 50, // Half of the width and height to create a circular shape
      // Border color
   
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    
     
      },
      input: {
        flex: 1,
        height: 30,
        color:'black'
    
      },
      link:{
        fontSize:14,
        color: '#00bfff',
        fontWeight:'bold',
    
      }
  
})
 
  
 

export default SettingScreen;
