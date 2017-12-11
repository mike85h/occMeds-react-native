
import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, KeyboardAvoidingView } from 'react-native'
import EnterCodeForm from '../components/EnterCodeForm'
import Logo from '../components/Logo'
import renderIf from '../functions/renderIf'

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
                    {renderIf(this.props.username!=undefined, <EnterCodeForm username={this.props.username} />)}
                    {renderIf(this.props.username==undefined, <Text>Fail</Text>)}
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