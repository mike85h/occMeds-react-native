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
                <Text>Back</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        height: 30,
        width: 80,
        backgroundColor: 'rgba(0,0,0,0.0)',
        padding: 15,
        margin: 10
    }
})