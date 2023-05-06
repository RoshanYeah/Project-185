import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './components/Home.js';
import Main from './screens/Main.js'

const Stack = createStackNavigator()

export default class App extends Component {
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='Home'
          screenOptions={{
            headerShown:false
          }}
        >
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
