import React, { Component } from 'react'
import { Picker, View, Text, StyleSheet } from 'react-native'

export default class AccountSpinner extends Component{
    constructor(props){
        super(props)
        this.state = {account: 'default'}
    }

    componentWillMount(){
        //fetch user data
        fetch("http://www.orthofitters.xyz/helloworld/app.js/users999/" + this.props.username)
        .then(response => response.json())
        .then(responseJson => {
            if(responseJson.error){
               console.log('spinner error')
            }else{
                console.log('spinner fetch success')
            }
        })
        .catch(error => {
          console.error(error);
        });  
    }

    pickerChange = (itemValue, itemIndex) => {
        console.log(this.state.account)
    }

    render() {
        return (
            <View>
                <Text>{this.state.account}</Text>
                <Picker
                    style={styles.container}
                    selectedValue={this.state.account}
                    onValueChange={(itemValue, itemIndex) => this.setState({account: itemValue})}>
                    <Picker.Item label='account1' value='acct1' />
                    <Picker.Item label='account2' value='acct2' />
                </Picker>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        //height: 50,
        //flex: 1,
        //bottom: 20,
        //position: 'absolute',
        //alignSelf: 'stretch'
    }
})

