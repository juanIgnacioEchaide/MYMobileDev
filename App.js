import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import React, { useState } from 'react'
import {Text, View, Image,TouchableOpacity} from 'react-native'
import HomeScreen from './src/Screen/HomeScreen'; 
import FetchScreen from './src/Screen/FetchScreen'; 
import PostHeaderScreen from './src/Screen/PostHeaderScreen';
import navIcon from './assets/mobile-nav-icon.png';


const AppNavigator = createStackNavigator({
  PostHeaderScreen: { screen: PostHeaderScreen },
  FetchScreen: {screen:FetchScreen},
}, {
    defaultNavigationOptions:(props)=>({
      headerStyle:{
        backgroundColor:'#2f4080'
      },
     headerLeft: 
     function header(){
       const [isOpen,setIsOpen]=useState(false)
       const OpenHandler=()=>{
         setIsOpen(!isOpen)
       }
       return(
     <View>
            <TouchableOpacity onPress={OpenHandler}>
                  <Image 
                  style={{
                    height:25,
                    width:25,
                    marginLeft:20
                    }}
                  source={navIcon}/>
          </TouchableOpacity>
      </View>)},
     headerTitleStyle:{
      fontWeight:'bold'
      },  
    })
});


const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {

  render() {
    return <AppContainer />;
  }
}
