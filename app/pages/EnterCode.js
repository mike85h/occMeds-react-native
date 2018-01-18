
import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, KeyboardAvoidingView } from 'react-native'
import EnterCodeForm from '../components/EnterCodeForm'
import Logo from '../components/Logo'
import renderIf from '../functions/renderIf'
import LoginForm from '../components/LoginForm'
import BackButton from '../components/BackButton'

export default class EnterCode extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.loginContainer}>
                <BackButton style={styles.backButton}/>
                <Logo />
                <View style={styles.formContainer}>
                    {renderIf(this.props.username!=undefined, <EnterCodeForm username={this.props.username} />)}
                    {renderIf(this.props.username==undefined, <LoginForm />)}
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

    },
    backButton: {
        marginTop: 350,

    }
});