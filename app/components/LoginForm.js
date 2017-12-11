 import React, { Component } from 'react'
 import { StyleSheet, View, TextInput, Text, TouchableOpacity, StatusBar, Alert } from 'react-native'
 import Footer from './Footer'
 import signUp from '../functions/signUp'
 
 import { Actions } from 'react-native-router-flux'


 export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.checkUsername = this.checkUsername.bind(this)
        this.state = {};
    }

    checkUsername(){
        return fetch("http://www.orthofitters.xyz/helloworld/app.js/users999/" + this.username)
        .then(response => response.json())
        .then(responseJson => {
          if(responseJson){
            Actions.enterCode({username: this.username});
          }
          //Route to access object properties
          //responseJson.message[0].password

          //Conditional rendering, set state:
          //this.setState({isSuccess: true})
          //this.setState({data: "success data"})

          //Conditional Redirect
          //if(responseJson){
          //    Actions.enterCode()
          //}
        })
        .catch(error => {
          console.error(error);
        });
       
       
    
    };

    render() {
         return(
             <View style={styles.container}>
                <TextInput
                    onChangeText={(text) => this.username = text}
                    returnKeyType='done'
                    placeholder="Username" 
                    placeholderTextColor='rgba(255,255,255,0.9)'
                    style={styles.input}
                    keyboardType='email-address'
                    autoCapitalize='none'>
                </TextInput>
                <TouchableOpacity style={styles.buttonContainer} onPress={this.checkUsername}>
                    <Text style={styles.buttonText}>
                        Continue
                    </Text>
                </TouchableOpacity>
                <View style={styles.signUpContainer}>
                    <Text style={styles.signUpText}>Dont have an account yet?</Text>
                    <TouchableOpacity onPress={signUp}> 
                        <Text style={styles.signUpButton}>Sign Up</Text>
                    </TouchableOpacity>
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
        borderRadius: 25,
        paddingHorizontal: 20
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
        bottom: 90,
        left: 140
    },
    signUpText: {
        color: '#fff',
        alignItems: 'center'
    },
    signUpClickableText: {
        color: 'blue'
    },
    signUpButton: {
        color: '#42c5f4',
        fontWeight: '900'
    }
 });