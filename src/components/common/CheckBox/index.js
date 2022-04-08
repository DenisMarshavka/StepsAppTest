import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

import styles from './styles';
import {ICONS} from '../../../utils/theme';

const CheckBox = ({active = false, onChange = () => null}) => (
  <TouchableOpacity
    activeOpacity={0.5}
    onPress={onChange}
    style={[styles.root, active && styles.active]}>
    {active && (
      <Image
        style={styles.icon}
        source={ICONS.done}
        resizeMode="contain"
      />
    )}
  </TouchableOpacity>
);

export default React.memo(CheckBox);
