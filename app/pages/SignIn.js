
import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, KeyboardAvoidingView } from 'react-native';
import SignInForm from '../components/SignInForm';
import Logo from '../components/Logo';

export default class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.loginContainer}>
                <Logo />
                <View style={styles.formContainer}>
                    <SignInForm />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        backgroundColor: 'rgb(100,100,100)'
    },
    formContainer: {

    }
});