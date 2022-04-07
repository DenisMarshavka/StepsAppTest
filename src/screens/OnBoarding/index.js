import React from 'react';
import styles from './styles'
import {SafeAreaView, StatusBar, Text, View} from "react-native";
import Button from "../../components/Button";
import StepsIndicator from "../../components/StepsIndicator";

const OnBoarding = () => {
    return (
        <>
            <StatusBar barStyle={'light-content'} />

            <View style={styles.root}>
                <Text style={[styles.commonText, styles.title]}>Some title</Text>

                <View style={styles.body}>
                    <Text style={styles.commonText}>Some text</Text>
                </View>

                <View style={styles.bottomSection}>
                    <SafeAreaView>
                        <Button title='Next' style={styles.btn} />

                        <StepsIndicator activeStep={0} stepsLength={3} />
                    </SafeAreaView>
                </View>
            </View>
    </>
    )
}

export default React.memo(OnBoarding);
