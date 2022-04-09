import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import propType from 'prop-types';

import styles from './styles';
import {ICONS} from '../../../../utils/theme';
import {CheckBox} from '../../../common';

const Task = ({title, completed, onCheck, onDelete}) => (
  <View style={styles.root}>
    <View style={styles.leftSection}>
      <CheckBox active={completed} onChange={onCheck} />

      <Text style={styles.title}>{title}</Text>
    </View>

    <TouchableOpacity onPress={onDelete} style={styles.btnDel}>
      <Image source={ICONS.delete} style={styles.btnDelIcon} />
    </TouchableOpacity>
  </View>
);

Task.propTypes = {
  title: propType.string,
  completed: propType.bool,
  onCheck: propType.func,
  onDelete: propType.func,
};
Task.defalutProps = {
  title: '',
  completed: false,
  onCheck: () => null,
  onDelete: () => null,
};

export default React.memo(Task);
