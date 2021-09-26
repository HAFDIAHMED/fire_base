import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputcontainer}>
      <TextInput style={styles.input}
       placeholder="email">

       </TextInput>
       <TextInput style={styles.input}
       placeholder="password">

       </TextInput>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  inputcontainer : {
    width : '80%',
  },
  input : {
    backgroundColor:"white",
    paddingHorizontal: 15,
    paddingVertical:10,
  },
});
