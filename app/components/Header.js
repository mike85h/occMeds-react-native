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
        height: 70,
        right: 0,
        left: 0,
        flex: 1,
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    headerText: {
        color: 'rgb(255,255,255)',
        alignItems: 'center',
        fontSize: 20,
        top: 15,
        backgroundColor: 'rgba(255,255,255,0.0)'
    },
})