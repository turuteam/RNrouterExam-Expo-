import React, {Component} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './components/Home';
import ProfileScreen from './components/Profile';
import FeedScreen from './components/Feed';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

const App = ()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
        name="Screen_Home" 
        component={HomeScreen}
        options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Screen_Profile" component={ProfileScreen} />
        <Stack.Screen name="Screen_Feed" component={FeedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App