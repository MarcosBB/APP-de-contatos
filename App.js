import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from './src/components/header'
import axios from 'axios'


export default class App extends React.Component {
    renderList() {
    //     const textElements = names.map((name, index) => {
    //         return  <Text key={index}>{ name }</Text>
    //     })
    //     return textElements

    axios.get('https://randomuser.me/api/?nat=br&results=10').then(response =>{
        const { results } = response.data
        const names = results.map(people => { return people.name.first })
        console.log(names)
    })
    }

    render() {
        return (
            <View>
                <Header title="Contatos"/>
                { this.renderList() }
            </View>
        )
    }
}

