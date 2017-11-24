
import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
    render() {
        return (
            <View style={styles.loginContainer}>
                <View style={styles.logoContainer}>
                    <Image 
                        style = {styles.logo}
                        source = {require('../../../assets/om_icon_white.png')}>
                    </Image>
                    <Text style={styles.title}>occMeds</Text>
                </View>
                <View style={styles.formContainer}>
                    <LoginForm />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        backgroundColor: 'rgb(100,100,100)'
    },
    logoContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    formContainer: {

    },
    logo: {
        width: 100,
        height: 100,
    },
    title: {
        color: '#fff',
        marginTop: 10,
        fontSize: 30,
        textAlign: 'center',
        opacity: 0.9
    }
});