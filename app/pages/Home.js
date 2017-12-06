import React,{ Component } from 'react'
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class Home extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    goBack() {
        Actions.pop()
    }

    connectTrial() {
        return fetch("http://www.orthofitters.xyz/helloworld/app.js/users999/ahinton")
          .then(response => response.json())
          .then(responseJson => {
            console.log(responseJson) 
          })
          .catch(error => {
            console.error(error);
          });
        }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={this.connectTrial}>
                    <Text>connectTrial</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.goBack}>
                    <Text>Back</Text>
                </TouchableOpacity>
            </View>
        )
    }
    }

    const styles = StyleSheet.create({
        container: {
            backgroundColor: 'rgb(25,245,39)',
            flex: 1
        },
        button: {
            height: 50,
            width: 100,
            backgroundColor: '#fff',
            padding: 10,
            margin: 20
        }
    })
