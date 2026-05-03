import React from 'react';
import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Routes } from './src/routes';
import { ThemeProvider } from 'styled-components';
import {themes} from './src/global/styles/color';

export default function App() {
  return (
    <ThemeProvider theme={themes}>
      <StatusBar
        barStyle='light-content'
        backgroundColor="transparent"
        //translucent
      />
      <Routes />
    </ThemeProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  }
});
