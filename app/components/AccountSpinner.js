import React, { Component } from 'react'
import { Picker, View, Text, StyleSheet } from 'react-native'

export default class AccountSpinner extends Component{
    constructor(){
        super()
        this.state = {accountsAvailable: ['dashboard', 'acct1']}
    }

    // componentWillMount

    render() {
        return (
            <Picker
                style={styles.container}
                selectedValue={this.state.account}
                onValueChange={(itemValue, itemIndex) => this.setState({account: itemValue})}>
                <Picker.Item label='account1' value='acct1' />
                <Picker.Item label='account2' value='acct2' />
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

