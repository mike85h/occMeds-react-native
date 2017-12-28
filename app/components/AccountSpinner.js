import React, { Component } from 'react'
import { Picker, View, Text, StyleSheet } from 'react-native'

export default class AccountSpinner extends Component{
    constructor(){
        super()
        this.state = {accountsAvailable: ['dashboard', 'acct1']}
    }

    render() {
        return (
            <Picker
                style={styles.container}
                selectedValue={this.state.language}
                onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                <Picker.Item label='account1' value="acct1" />
                {/* <Picker.Item label={} value="acct2" onPress={console.log('acct 2 pressed')} /> */}
            </Picker>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        flex: 1,
        bottom: 20,
        position: 'absolute',
        alignSelf: 'stretch'
    }
})

