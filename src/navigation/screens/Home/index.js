import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

//TODO: Finished
const Home = () => {
  return (
    <View style={styles.root}>
      <Text>Home screen</Text>
    </View>
  );
};

export default React.memo(Home);
