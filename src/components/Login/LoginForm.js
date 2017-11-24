 import React, { Component } from 'react';
 import { StyleSheet, View, TextInput, Text, TouchableOpacity, StatusBar } from 'react-native';
 import Footer from '../Footer/Footer';

 export default class LoginForm extends Component {
     render() {
         return(
             <View style={styles.container}>
                <StatusBar 
                    barStyle='light-content'
                />
                <TextInput
                    returnKeyType='done'
                    placeholder="Username" 
                    placeholderTextColor='rgba(255,255,255,0.9)'
                    style={styles.input}
                    keyboardType='email-address'>
                </TextInput>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>
                        Login
                    </Text>
                </TouchableOpacity>
                <Footer />
             </View>
         )
     }
 }

 const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input:{
        height: 50,
        backgroundColor: 'rgba(255,255,255, 0.7)',
        marginBottom: 20,
        bottom: 20
    },
    buttonContainer: {
        backgroundColor: 'rgba(175,175,175, 0.8)',
        paddingVertical: 15,
        height: 50,
        bottom: 20,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
    }
 });