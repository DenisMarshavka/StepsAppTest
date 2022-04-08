import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const Button = ({
  onPress = () => null,
  title = '',
  disabled = false,
  style = {},
}) => (
  <View style={[styles.root, style, disabled && {opacity: .4}]}>
    <TouchableOpacity
      activeOpacity={!disabled ? 0.8 : 1}
      style={styles.btn}
      onPress={!disabled ? onPress : null}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  </View>
);

export default React.memo(Button);
