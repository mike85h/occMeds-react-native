import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import logout from '../functions/logout'

export default class LogoutButton extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <TouchableOpacity style={styles.button} onPress={logout}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        height: 50,
        width: 50,
        marginTop: 15,
        backgroundColor: 'rgba(0,0,0,0.0)',
    },
    buttonText: {
        color: 'rgb(255,255,255)'
    }
})