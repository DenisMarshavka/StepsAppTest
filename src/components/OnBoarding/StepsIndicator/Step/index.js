import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {COLORS} from '../../../../utils/theme';

const Step = ({
  number = 0,
  disabled = false,
  active = false,
  done = false,
  circleStyle = {},
}) => {
  return (
    <View style={styles.root}>
      <View
        style={[
          styles.circle,
          active && {
            backgroundColor: COLORS.yellow,
            borderColor: COLORS.yellow,
          },
          done && {backgroundColor: COLORS.green, borderColor: COLORS.green},
          circleStyle,
          disabled && {opacity: 0.5},
        ]}>
        <Text style={styles.circleNumberText}>{number}</Text>
      </View>

      <Text style={[styles.title, disabled && {opacity: 0.5}]}>
        Step {number}
      </Text>
    </View>
  );
};

export default React.memo(Step);
