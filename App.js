import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import {
  fotoprofil, ig
} from './assets'
import { NavigationContainer, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons, } from 'react-native-vector-icons';
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
    <Tab.Navigator screenOptions={{
      tabBarLabelStyle: {
        display: "none"
      },
    }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),

      }} />
      <Tab.Screen name="Search" component={SearchScreen} options={{

        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="magnify" color={color} size={size} />
        ),

      }} />
      <Tab.Screen name="Video" component={VideoScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="movie-outline" color={color} size={size} />
        ),

      }} />
      <Tab.Screen name="Store" component={StoreScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="shopping-outline" color={color} size={size} />
        ),

      }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        tabBarIcon: ({ color, size, }) => (
          <Image source={fotoprofil} style={[style.circle, { width: 25, height: 25 }]} />
        ),



      }} />
    </Tab.Navigator>
  )
}

export default function App() {
  function SplashScreen({ navigation }) {
    setTimeout(() => {
      navigation.replace('Login')
    }, 5000)

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={ig} style={{ width: 100, height: 100 }} />
      </View>
    );
  }
  return (

    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
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
    borderWidth: 1,
    borderColor: 'gray'
  },
})
