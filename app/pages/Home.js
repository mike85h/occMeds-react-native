import React,{ Component } from 'react'
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import renderIf from '../functions/renderIf'
import goBack from '../functions/goBack'
import logout from '../functions/logout'
import Footer from '../components/Footer'
import Logo from '../components/Logo'
import Chart from '../components/Chart'
import AccountSpinner from '../components/AccountSpinner'
import Header from '../components/Header'

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
        return fetch("http://www.orthofitters.xyz/helloworld/app.js/users999/" + this.props.username)
          .then(response => response.json())
          .then(responseJson => {
            console.log(responseJson)
            
            //Route to access object properties
            //responseJson.message[0].password

            //Conditional rendering, set state:
            this.setState({isSuccess: true})
            this.setState({data: "success data"})

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
                <Header/>
                <View>
                    {renderIf(this.state.isSuccess, <Text>{this.state.data}</Text>)}
                </View>
                <Chart />
                <AccountSpinner />
                <Footer />
            </View>
        )
    }
    }

    const styles = StyleSheet.create({
        container: {
            backgroundColor: 'rgb(200,200,200)',
            flex: 1,
            flexDirection: 'column',

        },
        buttonRow2: {
            height: 20,
            width: 100,
            left: 260,
            backgroundColor: 'rgba(0,0,0,0.0)'
        }
    })
