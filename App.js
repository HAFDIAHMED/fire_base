import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import LoginSreen from './screens/LoginSreen';
import HomeSreen from './screens/HomeSreen';
import { createStackNavigator } from '@react-navigation/stack';


export default function App() {
  return (
  <LoginSreen/>   
  );
}
