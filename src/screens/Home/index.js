import React from 'react';
import styles from './styles'
import {Text, View} from "react-native";

const Home = () => {
    return (
        <View style={styles.root}>
            <Text>Home screen</Text>
        </View>
    )
}

export default React.memo(Home);
