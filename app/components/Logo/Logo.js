import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, KeyboardAvoidingView } from 'react-native';

export default class Login extends Component {
    render() {
        return (
                <View style={styles.logoContainer}>
                    <Image 
                        style = {styles.logo}
                        source = {require('../../../assets/om_icon_white.png')}>
                    </Image>
                    <Text style={styles.title}>occMeds</Text>
                </View>     
        );
    }
}

const styles = StyleSheet.create({
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