import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Todo from './Todo';
import Profile from './Profile';
import {SCREEN_NAMES} from '../../utils';
import {SafeAreaView, StatusBar} from 'react-native';
import {COLORS} from '../../utils/theme';

const Tab = createBottomTabNavigator();

const TabsNavigator = () => (
  <SafeAreaView style={{flex: 1}}>
    <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.white} />

    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name={SCREEN_NAMES.Todo} component={Todo} />
      <Tab.Screen name={SCREEN_NAMES.Profile} component={Profile} />
    </Tab.Navigator>
  </SafeAreaView>
);

export default React.memo(TabsNavigator);
