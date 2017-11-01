import React from 'react'
import { StyleSheet, Text, View, Image, TextInput } from 'react-native'

import t from 'tcomb-form-native'

const Form = t.form.Form

const User = t.struct({
  email: t.String,
  username: t.String,
  password: t.String,
  terms: t.Boolean
})

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./assets/om_icon_white.png')} style={{height:50, width:50}}/>
        <Text>OccMeds</Text>
        <View>
          <Form type={User}/>
        </View>
        <Text style={styles.white}>OccMeds Mobile App</Text>
        <Text style={styles.white}>More Coming Soon!</Text>
        <Text style={styles.white}>email mharrington@stmarysnds for questions</Text>
      </View>
    )
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
})
