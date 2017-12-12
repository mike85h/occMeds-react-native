import React, { Component } from 'react'
import { StyleSheet, View, TextInput, Text, TouchableOpacity, StatusBar, Alert } from 'react-native'
import Footer from './Footer'
import goToLogin from '../functions/goToLogin'

import { Actions } from 'react-native-router-flux'

export default class SignUpForm extends Component {
   constructor(props) {
       super(props);
       this.state = {};
   }

   signUpCall = () => {
       const payload = {
           email: this.email,
           username: this.username,
           password: this.password
       };
       console.log(payload)
   } 

  
   
   render() {
        return(
            <View style={styles.container}>
               <TextInput
                   onChangeText={(text) => this.email = text}
                   returnKeyType='next'
                   placeholder="Email Address" 
                   placeholderTextColor='rgba(255,255,255,0.9)'
                   style={styles.input}
                   keyboardType='email-address'
                   onSubmitEditing={ () => this.username.focus() }>
               </TextInput>  
               <TextInput
                   onChangeText={ (text) => this.username = text }
                   returnKeyType='next'
                   placeholder="Username" 
                   placeholderTextColor='rgba(255,255,255,0.9)'
                   style={styles.input}
                   keyboardType='default'
                   onSubmitEditing={ () => this.password.focus() }
                   ref={ (input) => this.username = input }>
               </TextInput> 
               <TextInput
                   onChangeText={ (text) => this.password = text }
                   returnKeyType='done'
                   placeholder="Password" 
                   placeholderTextColor='rgba(255,255,255,0.9)'
                   style={styles.input}
                   keyboardType='default'
                   ref={ (input) => this.password = input }>
               </TextInput>
               <TouchableOpacity style={styles.buttonContainer} onPress={this.signUpCall}>
                   <Text style={styles.buttonText}>
                       Sign Up
                   </Text>
               </TouchableOpacity>
               <View style={styles.signUpContainer}>
                   <Text style={styles.signUpText}>Already have an account?</Text>
                   <TouchableOpacity onPress={goToLogin}>
                   <Text style={styles.signUpButton}>Sign In</Text>
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