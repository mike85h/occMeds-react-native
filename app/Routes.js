import React, { Component } from 'react'
import { Router, Stack, Scene } from 'react-native-router-flux'

import Login from './pages/Login'
import SignIn from './pages/SignIn'
import EnterCode from './pages/EnterCode'
import Home from './pages/Home'
import SignInPassword from './pages/SignInPassword'
import MyProfile from './pages/MyProfile'

export default class Routes extends Component {
    render () {
        return(
            <Router>
                <Stack key='root' hideNavBar={true}>
                    <Scene key='entry' component={EntryPoint} title='Entry' initial={true}/>
                    <Scene key='login' component={Login} title='Login'/>
                    <Scene key='signIn' component={SignIn} title='Sign In'/>
                    <Scene key='enterCode' component={EnterCode} title='Enter Code'/>
                    <Scene key='home' component={Home} title='Home'/>
                    <Scene key='signInPassword' component={SignInPassword} title='Sign In With Password' />
                    <Scene key='myProfile' component={MyProfile} title='My Profile'/>
                </Stack>
            </Router>
        )
    }
}