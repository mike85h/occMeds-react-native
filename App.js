import React, { Component } from 'react';
import {
  AppRegistry, 
  StyleSheet, 
  Text, 
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './app/components/Login/Login';

class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login'
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
        <Login />
    ) 
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Logged In'
  };
  render() {
    return (
      <View>
        <Text>Hello You Are Logged IN!</Text>
      </View>
    );
  }
}

export const OccMeds = StackNavigator({
  Login: { screen: LoginScreen },
  Home: { screen: HomeScreen }
});


export default class App extends React.Component {  
  render() {
    return <OccMeds />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
