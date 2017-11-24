 import React, { Component } from 'react';
 import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native';

 export default class LoginForm extends Component {
     render() {
         return(
             <View style={styles.container}>
                <TextInput
                    placeholder="Username" 
                    placeholderTextColor='rgba(255,255,255,0.9)'
                    style = {styles.input}>
                </TextInput>
                <TextInput
                    placeholderTextColor='rgba(255,255,255,0.9)'
                    placeholder="Password"
                    style = {styles.input}>
                </TextInput>
                <TouchableOpacity>
                    <Text>
                        Login
                    </Text>
                </TouchableOpacity>
             </View>
         )
     }
 }

 const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(255,255,255, 0.7)',
        marginBottom: 20
     }
 });