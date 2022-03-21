import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';
import axios from 'axios'


export default class App extends React.Component {
    renderList() {
        const names = [
            'Marcos Beraldo',
            'Eduardo Mauricio',
            'Bruno Renovato',
            'Clara Galvão'
        ];

        const textElements = names.map((name, index) => {
            return  <Text key={index}>{ name }</Text>
        })
        return textElements
    }

    render() {
        return (
            <View>
                <Header title="Contatos"/>
                { this.renderList() }
            </View>
        );
    }
}

