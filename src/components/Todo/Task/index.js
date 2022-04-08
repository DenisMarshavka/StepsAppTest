import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';

import styles from './styles';
import {ICONS} from '../../../utils/theme';
import {CheckBox} from '../../common';

//TODO: PropTypes
const Task = ({
  title = '',
  id = 0,
  completed = false,
  onCheck = () => null,
  onDelete = () => null,
}) => {
  return (
    <View style={styles.root}>
      <View style={styles.leftSection}>
        <CheckBox
          active={completed}
          onChange={() => onCheck(id, {completed: !completed})}
        />

        <Text style={styles.title}>{title}</Text>
      </View>

      <TouchableOpacity onPress={() => onDelete(id)} style={styles.btnDel}>
        <Image source={ICONS.delete} style={styles.btnDelIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(Task);
