import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

function LoginSreen(props) {
    return (
        <View style={styles.container}>
        <View style={styles.titlecontainer}>
          <Text style={styles.title}>Authentification With Firebase</Text>
        </View>
        <View style={styles.inputcontainer}>
        <TextInput style={styles.input}
         placeholder="email">
  
         </TextInput>
         <TextInput style={styles.input}
         placeholder="password">
  
         </TextInput>
        </View>
        <View style={styles.btncontainer}>
  
        <TouchableOpacity  style={styles.btn}>
        <Text style={styles.btntext}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnoutline}>
        <Text style={styles.outlinetext}>Register</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
}

export default LoginSreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  
    },
    titlecontainer : {
      
      padding : 50,
  
      
    },
    title : {
      fontSize : 20,
      fontWeight : 'bold',
      color: 'black',
  
    },
  
    inputcontainer : {
      width : '80%',
     
    },
    input : {
      backgroundColor:"white",
      paddingHorizontal: 15,
      paddingVertical:10,
      borderRadius : 10,
      borderWidth: 1,
      borderColor : '#0782F9',
      marginTop: 5,
  
    },
    btncontainer : {
      width : '60%',
      justifyContent : 'center',
      alignItems : 'center',
      marginTop : 40,
      borderColor : 'black',
    },
    btn : {
      backgroundColor : '#0782F9',
      width : '100%',
      borderRadius : 10,
      alignItems: 'center',
      padding : 15,
    },
    btnoutline : {
      backgroundColor : 'white',
      borderColor: 'black',
      borderWidth: 1,
      width : '100%',
      alignItems :'center',
      padding : 15,
      borderRadius : 10,
      marginTop : 15,
    },
    btntext : {
      fontSize : 18,
    },
    outlinetext : {
      fontSize : 18,
    },
  
  
  });
  