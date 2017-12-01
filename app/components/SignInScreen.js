// import React from 'react'
// import { 
//   StyleSheet, 
//   Text, 
//   View, 
//   ScrollView, 
//   Image, 
//   TextInput, 
//   Button 
// } from 'react-native'
// import t from '../../../../tcomb-form-native'

// const Form = t.form.Form

// const User = t.struct({
//   username: t.String,
//   password: t.String,
//   'Remember Me': t.Boolean
// })



// export default class App extends React.Component {
  
//   handleSubmit = () => {
//     const value = this._form.getValue()
//     console.log('value: ', value)
//   }

//   componentDidMount(){
//     return fetch('www.orthofitters.xyz/helloworld/app.js/users')
//       .then((response) => console.log(response))
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.centeredHeading}>
//           <Image source={require('./assets/om_icon_white.png')} style={{height:125, width:125}}/>
//           <Text style={{fontSize: 24}}>OccMeds</Text>
//         </View>
//         <View style={styles.centeredForm}>
//           <Form
//             ref = {c => this._form = c} 
//             type={User}
//           />
//         </View>
//         <View style={styles.centeredSubmit}>
//             <Button 
//               title={'Sign In'}
//               onPress={this.handleSubmit}
//             />
//           </View>
//         <View style ={styles.centeredFooter}>
//           <Text style={styles.white}>OccMeds Mobile App</Text>
//           <Text style={styles.white}>More Coming Soon!</Text>
//           <Text style={styles.white}>{String.fromCharCode(169) + ' 2017 St. Mary\'s NDS, LLC'} </Text>
//         </View>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'rgb(100,100,100)',
//     flexDirection: 'column',
//     alignItems: 'stretch',
//     justifyContent: 'center',
//     paddingTop: 50,
//     paddingLeft: 20,
//     paddingRight: 20,
//   },
//   white: {
//     color: 'white',
//   },
//   form: {
//     flex: 1,
//     backgroundColor: 'white',
//     width: 200,
//   },
//   centeredHeading: {
//     flex: 1,
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 50,
//   },
//   centeredForm: {
//     flex: 1,
//     flexDirection: 'column',
//     alignItems: 'stretch',
//     justifyContent: 'center',
//     paddingLeft: 40,
//     paddingRight: 40,
//   },
//   centeredFooter: {
//     flex: 1,
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//   },
//   centeredSubmit: {
//     flex: .3,
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderColor: '#fff',
//     borderWidth: 0.5,
//     borderRadius: 4,
//     marginTop: 40,
//     marginLeft: 40,
//     marginRight: 40,
//   },
// })
