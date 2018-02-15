import React, { Component } from 'react'
import { StyleSheet, View, TextInput, Text, TouchableOpacity, StatusBar, Alert } from 'react-native'
import Header from './Header'
import Footer from './Footer'


import { Actions } from 'react-native-router-flux'


export default class MyProfileForm extends Component {
   constructor(props) {
       super(props);
       this.state = {
           email: this.props.props.email,
           code: this.props.props.code,
           fName: this.props.props.fname,
           lName: this.props.props.lname,
           username: this.props.props.username
       };
       this.submitChange = this.submitChange.bind(this)
    }


   submitChange = (field) => {
      console.log(field)
      console.log(this.state.fName)
   }

   render() {
        return(
            <View style={styles.container}>
                <Header />
                    <View style={styles.profileForm}>
                        <View>
                            <Text>{this.state.email}</Text>
                            <TextInput
                              style={styles.inputField}
                              placeholder='enter new email address'
                              returnKeyLabel = {'Done'}
                              onChangeText = {(text)=> this.setState({email: text})}/>
                            <TouchableOpacity 
                              style={styles.saveButton} 
                              onPress={() => {this.submitChange('email')}}>
                                <Text>
                                    Save New Email
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text>{this.state.code}</Text>
                            <TextInput
                              style={styles.inputField}
                              placeholder='enter new code'
                              returnKeyLabel = {'Done'}
                              onChangeText = {(text)=> this.setState({code: text})}/>
                            <TouchableOpacity 
                              style={styles.saveButton} 
                              onPress={() => {this.submitChange('code')}}>
                                <Text>
                                    Save New Access Code
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text>{this.state.lName}</Text>
                            <TextInput
                              style={styles.inputField}
                              placeholder='enter new last name'
                              returnKeyLabel = {'Done'}
                              onChangeText = {(text)=> this.setState({lName: text})}/>
                            <TouchableOpacity 
                              style={styles.saveButton} 
                              onPress={() => {this.submitChange('lname')}}>
                                <Text>
                                    Save New Last Name
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text>{this.state.fName}</Text>
                            <TextInput
                              style={styles.inputField}
                              placeholder='enter new first name'
                              returnKeyLabel = {'Done'}
                              onChangeText = {(text)=> this.setState({fName: text})}/>
                            <TouchableOpacity 
                              style={styles.saveButton} 
                              onPress={() => {this.submitChange('fname')}}>
                                <Text>
                                    Save New First Name
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text>{this.state.username}</Text>
                            <TextInput
                              style={styles.inputField}
                              placeholder='enter new username'
                              returnKeyLabel = {'Done'}
                              onChangeText = {(text)=> this.setState({username: text})}/>
                            <TouchableOpacity 
                              style={styles.saveButton} 
                              onPress={() => {this.submitChange('username')}}>
                                <Text>
                                    Save New Username
                                </Text>
                            </TouchableOpacity>
                        </View>
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
        backgroundColor: 'rgb(255,255,2)',
        marginTop: 200,
        height: 200,
        width: 200,
        justifyContent: 'center'
    },
    inputField: {
        backgroundColor: 'rgb(240,120,100)'
    },
    saveButton: {
        backgroundColor: 'rgb(20,100,100)'
    }
});