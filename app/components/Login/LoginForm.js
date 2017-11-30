 import React, { Component } from 'react';
 import { StyleSheet, View, TextInput, Text, TouchableOpacity, StatusBar, Alert } from 'react-native';
 import Footer from '../Footer/Footer';
 import { StackNavigator } from 'react-navigation'; 

 export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    _loginCall = () => {
        const payload = {
            username: this.username
        }
        if(payload.username == "Mike") {
            console.log(payload.username);

        }else{
            Alert.alert(
                "Wrong Username",
                "What to do?",
                [
                    {text: 'continue?', oPress: () => console.log('pressed continue')}
                ],
                { cancelable: true }
            );
        }

    } 
    
    render() {
         return(
             <View style={styles.container}>
                <TextInput
                    onChangeText={(text) => this.username = text}
                    returnKeyType='done'
                    placeholder="Username" 
                    placeholderTextColor='rgba(255,255,255,0.9)'
                    style={styles.input}
                    keyboardType='email-address'>
                </TextInput>
                <TouchableOpacity style={styles.buttonContainer} onPress={this._loginCall}>
                    <Text style={styles.buttonText}>
                        Login
                    </Text>
                </TouchableOpacity>
                <View style={styles.signUpContainer}>
                    <Text style={styles.signUpText}>Dont have an account yet?</Text>
                    <Text style={styles.signUpButton}>Sign Up</Text>
                </View>
                
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
        bottom: 110,
        borderRadius: 25
    },
    buttonContainer: {
        backgroundColor: 'rgba(175,175,175, 0.8)',
        paddingVertical: 15,
        height: 50,
        bottom: 115,
        borderRadius: 25,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
    },
    signUpContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        bottom: 90
    },
    signUpText: {
        color: '#fff'
    },
    signUpClickableText: {
        color: 'blue'
    },
    signUpButton: {
        color: '#42c5f4',
        fontWeight: '900'
    }
 });