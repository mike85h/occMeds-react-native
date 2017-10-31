import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.white}>OccMeds Mobile App</Text>
        <Text style={styles.white}>More Coming Soon!</Text>
        <Text style={styles.white}>email mharrington@stmarysnds for questions</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(100,100,100)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  white: {
    color: 'white',
  },
});
