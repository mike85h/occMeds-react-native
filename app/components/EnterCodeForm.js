import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, StatusBar, Alert } from 'react-native';
import Footer from './Footer';

import { Actions } from 'react-native-router-flux'

export default class SignUpForm extends Component {
   constructor(props) {
       super(props);
       this.state = {};
   }

   _loginCall = () => {
        Actions.home()
    //HOW TO USE DATA FROM FORM TO SEND AS PAYLOAD:
    //------------------------------------------------------------
    //    const payload = {
    //        username: this.username
    //    }
    //    if(payload.username == "Mike") {
    //        console.log(payload.username);
    //        Alert.alert()

    //    }else{
    //        Alert.alert(
    //            "Wrong Code",
    //            "What would you like to do?",
    //            [
    //                {text: 'continue?', oPress: () => {}},
    //                {text: 'go back?', onPress: () => {}}
    //            ],
    //            { cancelable: true }
    //        );
    //    }
    //------------------------------------------------------------

   } 

   signUp(){
       Actions.signUp()
   }
   
   render() {
        return(
            <View style={styles.container}>
                <View style={styles.codeContainer}>
                    <TextInput
                        onChangeText={(text) => this.username = text}
                        placeholder="*" 
                        placeholderTextColor='rgba(255,255,255,0.9)'
                        style={styles.input}
                    >
                    </TextInput>
                    <TextInput
                        onChangeText={(text) => this.username = text}
                        placeholder="*" 
                        placeholderTextColor='rgba(255,255,255,0.9)'
                        style={styles.input}
                    >
                    </TextInput>
                    <TextInput
                        onChangeText={(text) => this.username = text}
                        placeholder="*" 
                        placeholderTextColor='rgba(255,255,255,0.9)'
                        style={styles.input}
                    >
                    </TextInput>
                    <TextInput
                        onChangeText={(text) => this.username = text}
                        placeholder="*" 
                        placeholderTextColor='rgba(255,255,255,0.9)'
                        style={styles.input}
                    >
                    </TextInput>
                </View>
                <TouchableOpacity style={styles.buttonContainer} onPress={this._loginCall}>
                   <Text style={styles.buttonText}>
                       Login
                   </Text>
                </TouchableOpacity>
                <View style={styles.signUpContainer}>
                   <Text style={styles.signUpText}>Dont have an account yet?</Text>
                   <TouchableOpacity style={styles.touchableSignUp} onPress={this.signUp}>
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
   },
   signUpText: {
       color: '#fff',
   },
   signUpButton: {
       color: '#42c5f4',
       fontWeight: '900'
   },
   touchableSignUp: {
       alignItems: 'center'
   }
});