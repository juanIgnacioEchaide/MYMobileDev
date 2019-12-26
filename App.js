import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import React from 'react'
import HomeScreen from './src/Screen/HomeScreen';

const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen }
}, {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}