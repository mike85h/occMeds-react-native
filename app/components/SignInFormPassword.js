import React, { Component } from 'react'
import { StyleSheet, View, TextInput, Text, TouchableOpacity, StatusBar, Alert } from 'react-native'
import Footer from './Footer'
import goToEnterCode from '../functions/goToEnterCode'

import { Actions } from 'react-native-router-flux'


export default class LoginForm extends Component {
   constructor(props) {
       super(props);
       this.login = this.login.bind(this)
       this.state = {};
   }

   login(username){
       const password = this.password
       return fetch("http://www.orthofitters.xyz/helloworld/app.js/users999/" + this.username)
       .then(response => response.json())
       .then(responseJson => {
         if(this.password === responseJson.message[0].password){
           Actions.enterCode({username: this.username, password: responseJson.message[0].password, code: responseJson.message[0].passcode});
         }
       })
       .catch(error => {
         console.error(error);
       })
  }

   render() {
        return(
            <View style={styles.container}>
               <TextInput
                   onChangeText={(text) => this.password = text}
                   returnKeyType='done'
                   placeholder="Password" 
                   placeholderTextColor='rgba(255,255,255,0.9)'
                   style={styles.input}
                   keyboardType='default'
                   autoCapitalize='none'>
               </TextInput>
               <TouchableOpacity style={styles.buttonContainer} onPress={() => {this.login(this.props.username)}} >
                   <Text style={styles.buttonText}>
                       Continue
                   </Text>
               </TouchableOpacity>
        
               <View style={styles.signUpContainer}>
                   <Text style={styles.signUpText}>Want to enter your code instead?</Text>
                   <TouchableOpacity onPress={goToEnterCode}> 
                       <Text style={styles.signUpButton}>Enter Code</Text>
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
       left: 125
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