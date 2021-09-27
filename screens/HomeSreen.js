
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/core'


function HomeSreen(props) {
   

    
    return (
        <View style={styles.container}>
            <Text> Welcome  to Home Screen</Text>

        </View>
    );
}

export default HomeSreen;
const styles = StyleSheet.create({
    container : {
        flex :1,
        alignItems : 'center',
        padding: 100,
    },
   

})