import React from 'react';
import styles from './styles';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Button from '../../../components/common/Button';
import StepsIndicator from '../../../components/OnBoarding/StepsIndicator';
import {SCREEN_NAMES} from '../../../utils';
import {COLORS} from '../../../utils/theme';

const OnBoarding = () => {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={COLORS.primary} />

      <View style={styles.root}>
        <Text style={[styles.commonText, styles.title]}>Some title</Text>

        <View style={styles.body}>
          <Text style={styles.commonText}>Some text</Text>
        </View>

        <View style={styles.bottomSection}>
          <SafeAreaView>
            <Button
              title="Next"
              style={styles.btn}
              onPress={() => navigation.navigate(SCREEN_NAMES.Home)}
            />

            <StepsIndicator activeStep={0} dataLength={3} />
          </SafeAreaView>
        </View>
      </View>
    </>
  );
};

export default React.memo(OnBoarding);
