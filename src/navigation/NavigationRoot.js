import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import OnBoarding from './screens/OnBoarding';
import TabsNavigator from './tabs/TabsNavigator';
import {SCREEN_NAMES} from '../utils';

const Stack = createNativeStackNavigator();

const NavigationRoot = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={SCREEN_NAMES.OnBoarding} component={OnBoarding} />
      <Stack.Screen name={SCREEN_NAMES.Home} component={TabsNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default React.memo(NavigationRoot);
