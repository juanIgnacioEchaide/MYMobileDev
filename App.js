import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import React from 'react'
import {Text} from 'react-native'
import HomeScreen from './src/Screen/HomeScreen'; 
/* import PostHeaderScreen from './src/Screen/PostHeaderScreen'; */

const AppNavigator = createStackNavigator({
  HomeScreen: { screen: HomeScreen }
}, {
    headerMode: 'screen',
    
        navigationOptions: {
        headerVisible: true,
      }
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
