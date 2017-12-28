import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'


export default class Chart extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(
            <View style = {styles.container}>
                <Text>Graph Placeholder</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: 200,
        flex: 1,
        paddingTop: 100
    }
})

