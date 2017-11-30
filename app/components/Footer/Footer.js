import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native'

export default class Footer extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.footerContainer}>
                <Text style={styles.footerText}>
                    &copy; 2017 St Marys NDS, LLC
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    footerContainer: {
        backgroundColor: 'rgb(100,100,100)',
        position: 'absolute',
        height: 20,
        bottom: 0,
        right: 0,
        left: 0,
        alignItems: 'center'
    },
    footerText: {
        color: '#aaa',
        alignItems: 'center'
    }
})