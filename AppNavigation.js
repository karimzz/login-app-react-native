import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './Screens/HomeScreen';
import WelcomeScreens from './Screens/WelcomeScreens';
import LoginScreen from './Screens/LoginScreen';
import SignUpScreen from './Screens/SignUpScreen';

export default function AppNavigation() {
    
    // For Define Route 
    const Stack = createNativeStackNavigator() ; 

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='welcome' screenOptions={{headerShown : false}}>
            <Stack.Screen name='home' component={HomeScreen} />
            <Stack.Screen name='welcome' component={WelcomeScreens} />
            <Stack.Screen name='login' component={LoginScreen} />
            <Stack.Screen name='signup' component={SignUpScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}