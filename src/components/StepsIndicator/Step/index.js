import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import styles from './styles';

const Step = ({ number = 0 }) => {
    return (
        <View style={styles.root}>

                <View style={styles.circle}>
                    <Text style={styles.circleNumberText}>{number}</Text>
                </View>

                <Text style={styles.title}>Step {number}</Text>
        </View>
    );
}

export default React.memo(Step);
