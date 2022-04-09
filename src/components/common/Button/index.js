import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ViewPropTypes} from 'deprecated-react-native-prop-types';
import propType from 'prop-types';
import styles from './styles';

const Button = ({onPress, title, disabled, style}) => (
  <View style={[styles.root, style, disabled && {opacity: 0.7}]}>
    <TouchableOpacity
      activeOpacity={!disabled ? 0.8 : 1}
      style={styles.btn}
      onPress={!disabled ? onPress : null}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  </View>
);

Button.propTypes = {
  onPress: propType.func,
  title: propType.string,
  disable: propType.bool,
  style: ViewPropTypes.style,
};
Button.defalutProps = {
  onPress: () => null,
  title: '',
  disabled: false,
  style: {},
};

export default React.memo(Button);
