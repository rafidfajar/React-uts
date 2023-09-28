import * as React from 'react';
import { Image,StyleSheet, TouchableOpacity} from 'react-native';
import {
  fotoprofil
} from './assets'
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {MaterialCommunityIcons, Ionicons} from 'react-native-vector-icons';
import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  SearchScreen,
  VideoScreen,
  StoreScreen,
  ProfileScreen,
  MessageScreen,
  SettingScreen
} from './pages'

const Stack = createNativeStackNavigator();
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator  screenOptions={{
      tabBarLabelStyle: {
        display: "none" 
      },
    }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
         
        }}/>
      <Tab.Screen name="Search" component={SearchScreen} options={{
        
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          ),
        
        }} />
      <Tab.Screen name="Video" component={VideoScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="movie-outline" color={color} size={size} />
          ),
       
        }}/>
      <Tab.Screen name="Store" component={StoreScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="shopping-outline" color={color} size={size} />
          ),
     
        }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
          tabBarIcon: ({ color, size, }) => (
            <Image source={fotoprofil} style={[style.circle,{ width: 25, height: 25 }]} />
          ),
       
         
        
        }}/>
    </Tab.Navigator>
  )
}

function App({navigation}) {

  return (
    
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen}options={{ headerShown: false }} />
        <Stack.Screen name="Message" component={MessageScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} options={{ headerBackVisible: false }} />
        <Stack.Screen name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const style = StyleSheet.create({
circle: {
  width: 36, // Adjust the size as needed
  height: 36, // Adjust the size as needed
  borderRadius: 18, // Half of the width and height to create a circular shape
  borderWidth:1,
  borderColor:'gray'
},
})
export default App;