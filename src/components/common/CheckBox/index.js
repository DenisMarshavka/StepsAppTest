import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import propType from 'prop-types';

import styles from './styles';
import {ICONS} from '../../../utils/theme';

const CheckBox = ({active, onChange}) => (
  <TouchableOpacity
    activeOpacity={0.5}
    onPress={onChange}
    style={[styles.root, active && styles.active]}>
    {active && (
      <Image style={styles.icon} source={ICONS.done} resizeMode="contain" />
    )}
  </TouchableOpacity>
);

CheckBox.propTypes = {
  active: propType.bool,
  onChange: propType.func,
};
CheckBox.defalutProps = {
  active: false,
  onChange: () => null,
};

export default React.memo(CheckBox);
