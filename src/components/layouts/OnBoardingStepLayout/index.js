import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import propType from 'prop-types';

import styles from './styles';
import {COLORS} from '../../../utils/theme';
import Button from '../../common/Button';
import {SCREEN_NAMES} from '../../../utils';
import StepsIndicator from '../../screens/OnBoardings/StepsIndicator';
import {useGenerateOnBoardingScreenNameByIndexKey} from '../../../hook';

const OnBoardingStepLayout = ({
  title = 'Some title',
  description = 'Some text',
  indexKey = 0,
  allOnBoardingsLength = 3,
  onNext = () => null,
  onEnd = () => null,
  children = null,
  navigation = {},
}) => {
  const generateOnBoardingScreenName =
    useGenerateOnBoardingScreenNameByIndexKey();

  const nextOnBoardingScreenName = React.useMemo(
    () =>
      SCREEN_NAMES.OnBoardings?.[generateOnBoardingScreenName(indexKey + 2)],
    [indexKey, generateOnBoardingScreenName],
  );

  const hasNextBoard = React.useMemo(
    () => indexKey + 1 < allOnBoardingsLength,
    [indexKey, allOnBoardingsLength],
  );

  const handleNext = React.useCallback(() => {
    onNext();
    navigation.navigate(nextOnBoardingScreenName);
  }, [nextOnBoardingScreenName, navigation, onNext]);

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={COLORS.primary} />

      <View style={styles.root}>
        <Text style={[styles.commonText, styles.title]}>{title}</Text>

        <View style={styles.body}>
          <Text style={styles.commonText}>{description}</Text>

          {children}
        </View>

        <View style={styles.bottomSection}>
          <SafeAreaView>
            <Button
              title="Next"
              style={styles.btn}
              onPress={hasNextBoard ? handleNext : onEnd}
            />

            <StepsIndicator
              activeStep={indexKey}
              dataLength={allOnBoardingsLength}
            />
          </SafeAreaView>
        </View>
      </View>
    </>
  );
};

OnBoardingStepLayout.propTypes = {
  title: propType.string,
  description: propType.string,
  indexKey: propType.number,
  allOnBoardingsLength: propType.number,
  onNext: propType.func,
  onEnd: propType.func,
  children: propType.any,
  navigation: propType.shape({}),
};
OnBoardingStepLayout.defalutProps = {
  title: '',
  description: '',
  indexKey: 0,
  allOnBoardingsLength: 1,
  onNext: () => null,
  onEnd: () => null,
  children: null,
  navigation: {},
};

export default React.memo(OnBoardingStepLayout);
