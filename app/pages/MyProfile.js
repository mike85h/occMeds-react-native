
import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import Header from '../components/Header'
import Footer from '../components/Footer'
import MyProfileForm from '../components/MyProfileForm'

export default class MyProfile extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }


    
    render() {
        return (
            <View style={styles.container}>
                <MyProfileForm props={this.props} />
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(100,100,100)'
    }
});