import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScanScreen from './screens/ScanScreen';
import {createAppContainer,createSwitchNavigator}from 'react-navigation';

export default class App extends React.Component() {
  render() {
    return (
      <View style={{ backgroundColor: 'orange', flex: 1 }}>
        <AppContainer/>
      </View>
    )
  }
}
var appNavigator=createSwitchNavigator({
  ScanScreen:ScanScreen
})
var AppContainer=createAppContainer(appNavigator)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
