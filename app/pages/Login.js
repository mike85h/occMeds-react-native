
import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, KeyboardAvoidingView, AsyncStorage } from 'react-native';
import LoginForm from '../components/LoginForm';
import Logo from '../components/Logo';
import renderIf from '../functions/renderIf'
import goToEnterCode from '../functions/goToEnterCode';

export default class Login extends Component {
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
                    this.setState({'pageToRender': 'codeForm'});
                    AsyncStorage.setItem('storedUsername', JSON.stringify({'storedUsername': username}) );
                }else{
                    this.setState({'isLoading':false})
                    console.log('hit else in the if statement')
                    this.setState({'pageToRender': 'loginForm'});
                }
            })
        .catch((error)=>{console.log(error)})


           // {renderIf(this.props.username!=undefined, <EnterCodeForm username={this.props.username} />)}
             //       {renderIf(this.props.username==undefined, <LoginForm />)}
        
    }
    
    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.loginContainer}>
                <Logo />
                <View style={styles.formContainer}>
                    {renderIf(this.state.isLoading==true, <View><Text>Loading ...</Text></View>)}
                    {renderIf(this.state.isLoading==false && this.state.pageToRender=='loginForm', <LoginForm />)}
                    {renderIf(this.state.isLoading==false && this.state.pageToRender=='codeForm', <View><Text>Success!</Text></View>)}
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

    }
});