import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {SCREEN_NAMES, STORAGE_KEYS} from '../../../utils';
import {COLORS} from '../../../utils/theme';
import {OnBoardingStepLayout} from '../../../components/layouts';
import {useGenerateOnBoardingScreenNameByIndexKey} from '../../../hook';

const Stack = createNativeStackNavigator();

const OnBoardingsStack = () => {
  const navigation = useNavigation();
  const generateOnBoardingScreenName =
    useGenerateOnBoardingScreenNameByIndexKey();

  const data = React.useMemo(
    () => [
      {title: 'Some title', description: 'Some description'},
      {
        title: 'Some title 2',
        description: 'Some description 2',
        children: (
          <View>
            <Text style={{color: COLORS.yellow, marginTop: 10}}>Some text</Text>
          </View>
        ),
      },
      {title: 'Some title 3', description: 'Some description 3'},
    ],
    [],
  );

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={COLORS.primary} />

      <Stack.Navigator>
        {data.map((onBoardingItemData = {}, index = 0) => (
          <Stack.Screen
            key={`on-boarding-item-${onBoardingItemData?.title ?? index}`}
            options={{
              title: '',
              headerStyle: {backgroundColor: COLORS.primary},
              headerTintColor: COLORS.yellow,
            }}
            name={
              SCREEN_NAMES.OnBoardings?.[
                generateOnBoardingScreenName(index + 1)
              ] ?? SCREEN_NAMES.OnBoardings[generateOnBoardingScreenName(1)]
            }>
            {props => (
              <OnBoardingStepLayout
                allOnBoardingsLength={data.length}
                indexKey={index}
                onEnd={async () => {
                  navigation.navigate(SCREEN_NAMES.Home);
                  await AsyncStorage.setItem(
                    STORAGE_KEYS.onBoardingsVisited,
                    'true',
                  );
                }}
                {...onBoardingItemData}
                {...props}
              />
            )}
          </Stack.Screen>
        ))}
      </Stack.Navigator>
    </>
  );
};

export default React.memo(OnBoardingsStack);
