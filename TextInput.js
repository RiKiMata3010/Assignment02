import React, { Component } from 'react';
import { TextInput, Text, View } from 'react-native';

export default function Input(){
    const [value, onChangeText] = React.useState('Text Input');

    return(
        <View>
            <TextInput>
                onChangeText={text=>onChangeText(text)}
                value = {value}
            </TextInput>
            <Text>{value}</Text>
        </View>
    );
}