import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {SCREEN_NAMES, STORAGE_KEYS} from '../../utils';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';

export const withChekOnBoardingsVisited = (
  Component = View,
  redirectScreenName = SCREEN_NAMES.OnBoarding,
) => {
  return (props = {}) => {
    const [visitedOnBoardings, setVisitedOnBoardings] = React.useState(false);
    const navigation = useNavigation();

    React.useEffect(() => {
      (async () => {
        const oldVisited = await AsyncStorage.getItem(
          STORAGE_KEYS.onBoardingsVisited,
        );

        setVisitedOnBoardings(!!oldVisited);
        if (!oldVisited && redirectScreenName) {
          navigation.navigate(redirectScreenName);
        }
      })();
    }, [navigation]);

    return (
      <Component
        navigation={navigation}
        {...props}
        visitedOnBoardings={visitedOnBoardings}
      />
    );
  };
};
