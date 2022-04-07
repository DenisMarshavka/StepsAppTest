import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import styles from './styles';
import Step from "./Step";

const StepsIndicator = ({ activeStep = 0, stepsLength = 3 }) => {
    return (
        <View style={styles.root}>
            <View style={styles.line} />

            <View style={styles.content}>
                {
                    Array(stepsLength).fill('').map((step = '', index= 0) => (
                        <Step key={`step-${index}`} number={index + 1} />
                    ))
                }
            </View>
        </View>
    );
}

export default React.memo(StepsIndicator);
