import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TabsNavigator from './tabs/TabsNavigator';
import {SCREEN_NAMES} from '../utils';
import OnBoardingsStack from './screens/OnBoardings';

const Stack = createNativeStackNavigator();

const NavigationRoot = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={SCREEN_NAMES.Home} component={TabsNavigator} />

      <Stack.Screen
        name={SCREEN_NAMES.OnBoarding}
        component={OnBoardingsStack}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default React.memo(NavigationRoot);
