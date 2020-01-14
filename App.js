import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import React, { useState } from 'react'
import {Text, View, Image,TouchableOpacity} from 'react-native'
import HomeScreen from './src/Screen/HomeScreen'; 


const AppNavigator = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
}, {
    defaultNavigationOptions:(props)=>({
      headerStyle:{
        backgroundColor:'#2f4080'
      },  
    })
});


const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {

  render() {
    return <AppContainer />;
  }
}