import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

function HomeSreen(name) {
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