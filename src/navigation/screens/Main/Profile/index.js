import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './styles';

const Profile = () => (
  <View style={styles.root}>
    <SafeAreaView>
      <Text>Profile screen</Text>
    </SafeAreaView>
  </View>
);

export default React.memo(Profile);
