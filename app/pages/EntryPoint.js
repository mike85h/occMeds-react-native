
import React, { Component } from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    Image, 
    KeyboardAvoidingView, 
    AsyncStorage 
} from 'react-native';
import LoginForm from '../components/LoginForm';
import Logo from '../components/Logo';
import renderIf from '../functions/renderIf'
import goToEnterCode from '../functions/goToEnterCode';
import EnterCodeForm from '../components/EnterCodeForm';

export default class EntryPoint extends Component {
    constructor(props){
        super(props);
        this.state = {
            'isLoading':true,
            'username': '',
            'pageToShow': ''
    };
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
                    this.setState({'username': username})
                }else{
                    this.setState({'isLoading':false})
                    console.log('hit else in the if statement')
                    this.setState({'pageToRender': 'loginForm'});
                }
            })
        .catch((error)=>{console.log(error)})
        
    }
    
    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.loginContainer}>
                <Logo />
                <View style={styles.formContainer}>
                    {renderIf(this.state.isLoading==true, <View><Text>Loading ...</Text></View>)}
                    {renderIf(this.state.isLoading==false && this.state.pageToRender=='loginForm', <LoginForm />)}
                    {renderIf(this.state.isLoading==false && this.state.pageToRender=='codeForm', <EnterCodeForm username={this.state.username}/>)}
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