import { View, Text,Image,TouchableOpacity,StyleSheet,SafeAreaView,ScrollView } from 'react-native';
import {MaterialCommunityIcons, Ionicons} from 'react-native-vector-icons';

import {
fotoprofil,
profil4,
  profil2,
  profil3,
  AppLogo
  } from '../../assets'
function HomeScreen({navigation}) {
  navigation.setOptions({
  headerTitle: () => (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image source={AppLogo}/>
    </View>
  ),
  headerRight: () => (
    <View style={{ flexDirection: 'row', marginRight: 5 }}>
          <TouchableOpacity
            style={{ marginRight: 16 }}
          
          >
            <MaterialCommunityIcons name="heart-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginEnd:5 }}
            onPress={() => navigation.navigate('Message')}
          >
            {/* Add your second icon here */}
            <MaterialCommunityIcons name="facebook-messenger" size={24} color="black" />
          </TouchableOpacity>
        </View>
  ),
  })
    return (
      <SafeAreaView style={style.safeArea}>
        <ScrollView>
      <ScrollView horizontal>
        <View style={style.container} >
        <View style={style.row}>
        <View style={{flexDirection:'column',alignItems:'center'}}>
        <TouchableOpacity style={{marginRight:10}}>
        <View >
        <Image source={fotoprofil} style={style.circularImage} />
        <View style={style.iconContainer}>
        <MaterialCommunityIcons name="plus-circle" size={26} color="#1e90ff" />
      </View>
        </View>
        </TouchableOpacity>
        <Text style={style.textContainer}>Cerita Anda</Text>
        </View>
        <View style={{flexDirection:'column',alignItems:'center'}}>
        <TouchableOpacity style={{marginRight:10}}>
        <View style={style.doubleBorder}>
        <Image source={profil2} style={style.circularImage} />
        </View>
        </TouchableOpacity>
        <Text style={{ fontSize: 14, marginRight: 8 }}>alfredosmrt</Text>
        </View>
        <View style={{flexDirection:'column',alignItems:'center'}}>
        <TouchableOpacity style={{marginRight:10}}>
        <View style={style.doubleBorder}>
        <Image source={profil3} style={style.circularImage} />
        </View>
        </TouchableOpacity>
        <Text style={{ fontSize: 14, marginRight: 8 }}>audyselfr</Text>
        </View>
        <View style={{flexDirection:'column',alignItems:'center'}}>
        <TouchableOpacity style={{marginRight:10}}>
        <View style={style.doubleBorder}>
        <Image source={profil4} style={style.circularImage} />
        </View>
        </TouchableOpacity>
        <Text style={{ fontSize: 14, marginRight: 8 }}>rahutstmpl</Text>
        </View>
        <View style={{flexDirection:'column',alignItems:'center'}}>
        <TouchableOpacity style={{marginRight:10}}>
        <View style={style.doubleBorder}>
        <Image source={profil2} style={style.circularImage} />
        </View>
        </TouchableOpacity>
        <Text style={{ fontSize: 14, marginRight: 8 }}>alfredosmrt</Text>
        </View>
        <View style={{flexDirection:'column',alignItems:'center'}}>
        <TouchableOpacity style={{marginRight:10}}>
        <View style={style.doubleBorder}>
        <Image source={profil3} style={style.circularImage} />
        </View>
        </TouchableOpacity>
        <Text style={{ fontSize: 14, marginRight: 8 }}>audyselfr</Text>
        </View>
        
      </View>
           
        </View>
      </ScrollView>
      
      <View style={{margin:0,marginTop:10}} >
        <View style={style.Beranda1}>
        <Image source={fotoprofil} style={style.circularImage1} />
        <Text style={{ fontSize: 16, marginRight: 8,fontWeight:500,marginLeft:8 ,flex:1}}>rafidfajar</Text>
          
          <MaterialCommunityIcons name="dots-vertical" size={25} color="black" style={{justifyContent: 'flex-end',}}/>
        </View>
        <View style={style.Beranda}>
       
        <Image  source={fotoprofil} style={style.gambar} />
        </View>
        <View style={[style.Beranda1,{marginLeft:10,marginBottom:5}]}>
        <MaterialCommunityIcons name="heart" size={28} color="red" />
        <MaterialCommunityIcons name="bookmark-outline" size={30} color="black" style={{marginLeft:310}}/>
        </View>
        <View style={[style.Beranda1,{marginLeft:10,marginBottom:15}]}>
      <Text style={{fontWeight:'bold'}}>1.000</Text>
      <Text style={{fontWeight:'bold',marginLeft:5}}>Like</Text>
        </View>
        <View style={style.Beranda1}>
        <Image source={profil2} style={style.circularImage1} />
        <Text style={{ fontSize: 16, marginRight: 8,fontWeight:500,marginLeft:8 ,flex:1 }}>alfredosmrt</Text>
          
          <MaterialCommunityIcons name="dots-vertical" size={25} color="black" style={{justifyContent: 'flex-end',}}/>
        </View>
        
        <View style={style.Beranda}>
      <Image  source={profil2} style={style.gambar} />
        </View>
        <View style={[style.Beranda1,{marginLeft:10,marginBottom:5}]}>
        <MaterialCommunityIcons name="heart-outline" size={28} color="black" />
        <MaterialCommunityIcons name="bookmark-outline" size={30} color="black" style={{marginLeft:310}}/>
        </View>
        <View style={[style.Beranda1,{marginLeft:10,marginBottom:15}]}>
      <Text style={{fontWeight:'bold'}}>1.000</Text>
      <Text style={{fontWeight:'bold',marginLeft:5}}>Like</Text>
        </View>
        <View style={style.Beranda1}>
        <Image source={profil3} style={style.circularImage1} />
        <Text style={{ fontSize: 16, marginRight: 8,fontWeight:500,marginLeft:8,flex:1 }}>audyselfr</Text>
          
          <MaterialCommunityIcons name="dots-vertical" size={25} color="black" style={{justifyContent: 'flex-end',}}/>
        </View>
        <View style={style.Beranda}>
        <Image  source={profil3} style={style.gambar} />
        </View>
        <View style={[style.Beranda1,{marginLeft:10,marginBottom:5}]}>
        <MaterialCommunityIcons name="heart-outline" size={28} color="black" />
        <MaterialCommunityIcons name="bookmark-outline" size={30} color="black" style={{marginLeft:310}}/>
        </View>
        <View style={[style.Beranda1,{marginLeft:10,marginBottom:15}]}>
      <Text style={{fontWeight:'bold'}}>1.000</Text>
      <Text style={{fontWeight:'bold',marginLeft:5}}>Like</Text>
        </View>
        <View style={style.Beranda1}>
        <Image source={profil4} style={style.circularImage1} />
        <Text style={{ fontSize: 16, marginRight: 8,fontWeight:500,marginLeft:8,flex:1 }}>rahutstmpl</Text>
          
          <MaterialCommunityIcons name="dots-vertical" size={25} color="black" style={{justifyContent: 'flex-end',}}/>
        </View>
        <View style={style.Beranda}>
        <Image  source={profil4} style={style.gambar} />
        </View>
        <View style={[style.Beranda1,{marginLeft:10,marginBottom:5}]}>
        <MaterialCommunityIcons name="heart-outline" size={28} color="black" />
        <MaterialCommunityIcons name="bookmark-outline" size={30} color="black" style={{marginLeft:310}}/>
        </View>
        <View style={[style.Beranda1,{marginLeft:10,marginBottom:15}]}>
      <Text style={{fontWeight:'bold'}}>1.000</Text>
      <Text style={{fontWeight:'bold',marginLeft:5}}>Like</Text>
        </View>
    
       
        

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
          margin: 5,
      },
      row: {
      
        flexDirection: 'row',
        alignItems: 'center',
        
        
      },
      textContainer: {
        flexDirection: 'column',
        marginRight:20,
        alignItems: 'center',
        justifyContent: 'flex-end',
      },
   
   
  
      doubleBorder: {
        borderRadius: 80, // Half of the total width (2 * borderWidth + width)
        borderWidth: 2,
        borderColor: 'orange', // Outer border color
        // Margin between the outer and inner borders
      },
      circularImage: {
        width: 75, // Set the width of the image
        height: 75, // Set the height of the image
        borderRadius: 50, // Half of the width and height to create a circular shape
        borderWidth: 3, // Border width
        borderColor: 'white',
        // Border color
     
      },
      circularImage1: {
        width: 50, // Set the width of the image
        height: 50, // Set the height of the image
        borderRadius: 50, // Half of the width and height to create a circular shape
        borderWidth: 3, // Border width
        borderColor: 'white',
        // Border color
     
      },
      Beranda:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:10,
      },
      Beranda1:{
flex:1,
flexDirection:'row',
alignItems:'center',
marginBottom:5,
marginLeft:5

      },
      gambar:{
      flex:1,
width:'100%',
height:380
      },
      iconContainer: {
        ...StyleSheet.absoluteFillObject,
        top: 47,
        left:49,
       borderRadius: 50,
       backgroundColor:'white'
       
      },
    
  })
export default HomeScreen;