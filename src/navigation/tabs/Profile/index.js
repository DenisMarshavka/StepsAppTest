import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

const Profile = () => {
  return (
    <View style={styles.root}>
      <Text>Profile screen</Text>
    </View>
  );
};

export default React.memo(Profile);
