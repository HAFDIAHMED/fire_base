import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeSreen from './screens/HomeSreen';
import LoginSreen from './screens/LoginSreen';



export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        
       
        <Stack.Screen name="LoginSreen" component={LoginSreen} />
      </Stack.Navigator>
    </NavigationContainer>

   
  );
}
