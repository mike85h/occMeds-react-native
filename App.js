import React, { Component } from 'react';
import { 
  StyleSheet,  
  View,
  Button,
  StatusBar
} 
from 'react-native';

import Routes from './app/Routes'

export default class App extends React.Component {  
  render() {
    return(
      <View style={styles.container}>
      <StatusBar
        backgroundColor='rgba(175,175,175, 0.8)'
        barStyle='light-content'
      />
      <Routes />
    </View>
    )
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
