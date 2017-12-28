import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native'
import BackButton from './BackButton'
import LogoutButton from './LogoutButton'

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.headerContainer}>
                <BackButton/>
                <Text style={styles.headerText}>
                    OccMeds
                </Text>
                <LogoutButton/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: 'rgb(100,100,100)',
        position: 'absolute',
        height: 30,
        top: 20,
        right: 0,
        left: 0,
        bottom: 20,
        alignItems: 'center'
    },
    headerText: {
        color: '#aaa',
        alignItems: 'center'
    }
})