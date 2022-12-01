import { StatusBar } from 'expo-status-bar';
import react, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Input from './TextInput'; 

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

