import React, { Component } from 'react'
import { StyleSheet, View, TextInput, Text, TouchableOpacity, StatusBar, Alert } from 'react-native'
import Header from './Header'
import Footer from './Footer'


import { Actions } from 'react-native-router-flux'


export default class MyProfileForm extends Component {
   constructor(props) {
       super(props);
       this.state = {};
       this.logProps = this.logProps.bind(this)
    }


   logProps() {
       console.log(this.props)
       console.log(this.state)
       //console.log(this.state)
   }

   render() {
        return(
            <View style={styles.container}>
                <Header />
                    <View style={styles.profileForm}>
                        <Text>{this.props.props.email}</Text>
                        <TextInput></TextInput>
                        <TouchableOpacity>
                           <Text>
                               Edit Email
                           </Text>
                        </TouchableOpacity>
                        <Text>{this.props.props.code}</Text>
                        <TextInput></TextInput>
                        <TouchableOpacity>
                            <Text>
                                Edit Code
                            </Text>
                        </TouchableOpacity>
                        <Text>{this.props.props.lname}</Text>
                        <TextInput></TextInput>
                        <TouchableOpacity>
                            <Text>
                                Edit Last Name
                            </Text>
                        </TouchableOpacity>
                        <Text>{this.props.props.fname}</Text>
                        <TextInput></TextInput>
                        <TouchableOpacity>
                            <Text>
                                Edit First Name
                            </Text>
                        </TouchableOpacity>
                        <Text>{this.props.props.username}</Text>
                        <TextInput></TextInput>
                        <TouchableOpacity>
                            <Text>
                                Edit Username
                            </Text>
                        </TouchableOpacity>
                    </View>
                <Footer />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profileForm: {
        backgroundColor: 'rgb(255,255,255)',
        marginTop: 200,
        height: 200,
        width: 200,
        justifyContent: 'center'
    }
});