import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from './Screen1';
import Screen2 from './Screen2';

const Stack = createStackNavigator();
export default function App() {
  return (
    //    <NavigationContainer>
    //   <Stack.Navigator >
    //     <Stack.Screen name="Home" component={Screen1}/>
    //     <Stack.Screen name="ChonMau" component={Screen2}/>
    //   </Stack.Navigator>
    // </NavigationContainer>

    <Screen1 />
    // <Screen2 />
  )
}