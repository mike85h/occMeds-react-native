import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import goBack from '../functions/goBack'

export default class BackButton extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <TouchableOpacity style={styles.button} onPress={goBack}>
                <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        height: 50,
        width: 40,
        marginTop: 15,
        backgroundColor: 'rgba(0,0,0,0.0)',
    },
    buttonText: {
        color: 'rgb(255,255,255)'
    }
})