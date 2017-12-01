import React, { Component } from 'react';
import {
  AppRegistry, 
  StyleSheet, 
  Text, 
  View,
  Button
} 
from 'react-native';

import Login from './app/pages/Login'
import SignUp from './app/pages/SignUp'
import EnterCode from './app/pages/EnterCode'

export default class App extends React.Component {  
  render() {
    return <EnterCode />
    //return <SignUp />
    //return <Login />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
