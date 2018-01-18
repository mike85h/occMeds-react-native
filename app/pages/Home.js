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
import goToMyProfile from '../functions/goToMyProfile'

export default class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            isSuccess: false,
            data: ''
        }
        this.myProfile = this.myProfile.bind(this)
    }

    myProfile(props) {
        console.log(this.props)
        Actions.myProfile(this.props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Header/>
                <View>
                    {renderIf(this.state.isSuccess, <Text>{this.state.data}</Text>)}
                </View>
                <Chart />
                <TouchableOpacity style={styles.myProfile} onPress={() => {this.myProfile(this.props)}}><Text>My Profile</Text></TouchableOpacity>
                <AccountSpinner username={this.props.username} code={this.props.code} />
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
        },
        myProfile: {
            flex: 1,
            height: 40,
            width: 90,
            backgroundColor: 'rgba(0,0,0,0.0)'
        }
    })
