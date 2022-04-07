/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import {createNativeStackNavigator} from "react-native-screens/native-stack";
import Home from "./src/screens/Home";
import OnBoarding from "./src/screens/OnBoarding";

const Stack = createNativeStackNavigator();


const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='OnBoarding' component={OnBoarding} options={{ title: '' }} />
          <Stack.Screen name='Home' component={Home} options={{ title: '' }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
