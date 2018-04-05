
import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, KeyboardAvoidingView, AsyncStorage } from 'react-native'
import EnterCodeForm from '../components/EnterCodeForm'
import Logo from '../components/Logo'
import renderIf from '../functions/renderIf'
import LoginForm from '../components/LoginForm'
import BackButton from '../components/BackButton'

export default class EnterCode extends Component {
    constructor(props){
        super(props);
        this.state = {'isLoading':true};
    }

    componentDidMount(){
        console.log('component did mount')
        AsyncStorage.getItem('storedUsername')
            .then((username) => {
                if(username){
                    this.setState({'isLoading':false})
                    console.log('first if in component')
                    
                    AsyncStorage.setItem('storedUsername', JSON.stringify({'storedUsername': username}) );
                    this.setState({'username': username})
                }else{
                    this.setState({'isLoading':false})
                    console.log('hit else in the if statement')
                    
                }
            })
        .catch((error)=>{console.log(error)})
        
    }
    
    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.loginContainer}>
                <BackButton style={styles.backButton}/>
                <Logo />
                <View style={styles.formContainer}>
                    {renderIf(this.state.isLoading==true, <View><Text>Loading...</Text></View>)}
                    {renderIf(this.state.isLoading==false, <EnterCodeForm username={this.state.username} />)}
                    {renderIf(this.state.isLoading==false, <LoginForm />)}
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        backgroundColor: 'rgb(100,100,100)'
    },
    formContainer: {

    },
    backButton: {
        marginTop: 350,

    }
});