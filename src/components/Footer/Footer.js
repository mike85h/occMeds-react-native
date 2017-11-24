import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native'

export default class Footer extends Component {
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
        backgroundColor: 'rgba(120,120,120,0.7)',
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