import React, { Component } from 'react'
import { StyleSheet, View, TextInput, Text, TouchableOpacity, StatusBar, Alert, Keyboard } from 'react-native'
import Footer from './Footer'
import signUp from '../functions/signUp'

import { Actions } from 'react-native-router-flux'

export default class SignUpForm extends Component {
   
    constructor(props) {
       super(props);
       this.state = {};
   }

   login(username){
      fetch("http://www.orthofitters.xyz/helloworld/app.js/users999/" + this.props.username)
        .then(response => response.json())
        .then(responseJson => {
            if(responseJson.error){
                //no username found in the db. for now reroutes to login page. needs error messaging.
                Actions.login()
            }else{
                if(responseJson.message.length!==0){
                    Actions.home(props={username: username});
                }else{
                    //do nothing
                }
            }
        })
        .catch(error => {
          console.error(error);
        });  
   }

   render() {
        return(
            <View style={styles.container}>
                <View style={styles.codeContainer}>
                    <TextInput
                        onChangeText={(num) => this.code1 = num}
                        onChange={ (input) => this.box2.focus() }
                        placeholder="*" 
                        placeholderTextColor='rgba(255,255,255,0.9)'
                        style={styles.input}
                        keyboardType='numeric'
                        ref={ (input) => this.box1 = input }
                    >
                    </TextInput>
                    <TextInput
                        onChangeText={(num) => this.code2 = num}
                        placeholder="*" 
                        placeholderTextColor='rgba(255,255,255,0.9)'
                        style={styles.input}
                        keyboardType='numeric'
                        ref={ (input) => this.box2 = input }
                        onChange={ (input) => this.box3.focus() }
                    >
                    </TextInput>
                    <TextInput
                        onChangeText={(num) => this.code3 = num}
                        placeholder="*" 
                        placeholderTextColor='rgba(255,255,255,0.9)'
                        style={styles.input}
                        keyboardType='numeric'
                        ref={ (input) => this.box3 = input }
                        onChange={ (input) => this.box4.focus() }
                    >
                    </TextInput>
                    <TextInput
                        onChangeText={(num) => this.code4 = num}
                        placeholder="*" 
                        placeholderTextColor='rgba(255,255,255,0.9)'
                        style={styles.input}
                        keyboardType='numeric'
                        ref={ (input) => this.box4 = input}
                        onChange={ Keyboard.dismiss }
                    >
                    </TextInput>
                </View>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => {this.login(this.props.username)}}>
                   <Text style={styles.buttonText}>
                       Login
                   </Text>
                </TouchableOpacity>
                <View style={styles.signUpContainer}>
                   <Text style={styles.signUpText}>Dont have an account yet?</Text>
                   <TouchableOpacity style={styles.touchableSignUp} onPress={signUp}>
                        <Text style={styles.signUpButton}>Sign Up!</Text>
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
   codeContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 275,
        justifyContent: 'space-between',
        paddingHorizontal: 20
   },
   input:{
       height: 60,
       backgroundColor: 'rgba(255,255,255, 0.7)',
       borderRadius: 15,
       paddingHorizontal: 5,
       width: 60,
       fontSize: 40,
       paddingLeft: 20
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
   signUpButton: {
       color: '#42c5f4',
       fontWeight: '900'
   },
   touchableSignUp: {
      
   }
});