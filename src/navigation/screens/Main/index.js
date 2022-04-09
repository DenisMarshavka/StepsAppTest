import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StatusBar} from 'react-native';

import Todo from './Todo';
import Profile from './Profile';
import {SCREEN_NAMES, UNIQUE_SCREENS_TITLES} from '../../../utils';
import {COLORS, ICONS} from '../../../utils/theme';

const Tab = createBottomTabNavigator();
const ICON_SIZE = 25;

const MainStack = () => (
  <>
    <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.white} />

    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: COLORS.blue,
        tabBarActiveTintColor: COLORS.yellow,
        tabBarIcon: ({focused = false}) => (
          <Image
            source={ICONS[`tabScreen${focused ? 'Focused' : 'Unfocused'}`]}
            resizeMode={'contain'}
            style={{
              height: ICON_SIZE,
              width: ICON_SIZE,
            }}
          />
        ),
      }}>
      <Tab.Screen
        name={SCREEN_NAMES.Todo}
        component={Todo}
        options={{title: UNIQUE_SCREENS_TITLES[SCREEN_NAMES.Todo]}}
      />
      <Tab.Screen name={SCREEN_NAMES.Profile} component={Profile} />
    </Tab.Navigator>
  </>
);

export default React.memo(MainStack);
