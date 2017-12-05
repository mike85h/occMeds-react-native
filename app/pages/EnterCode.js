
import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, KeyboardAvoidingView } from 'react-native'
import EnterCodeForm from '../components/EnterCodeForm'
import Logo from '../components/Logo'

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.loginContainer}>
                <Logo />
                <View style={styles.formContainer}>
                    <EnterCodeForm username={this.props.username} />
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