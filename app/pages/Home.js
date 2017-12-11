import React,{ Component } from 'react'
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import renderIf from '../functions/renderIf'
import goBack from '../functions/goBack'

export default class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            isSuccess: false,
            data: ''
        
        }
        this.connectTrial = this.connectTrial.bind(this)
    }
    connectTrial() {
        return fetch("http://www.orthofitters.xyz/helloworld/app.js/users999/ahinton")
          .then(response => response.json())
          .then(responseJson => {
            console.log(responseJson)
            
            //Route to access object properties
            //responseJson.message[0].password

            //Conditional rendering, set state:
            //this.setState({isSuccess: true})
            //this.setState({data: "success data"})

            //Conditional Redirect
            //if(responseJson){
            //    Actions.enterCode()
            //}
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
                <TouchableOpacity style={styles.button} onPress={goBack}>
                    <Text>Back</Text>
                </TouchableOpacity>
                {renderIf(this.state.isSuccess, <Text>{this.state.data}</Text>)}
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
