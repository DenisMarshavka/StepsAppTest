import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import Step from './Step';

const StepsIndicator = ({activeStep = 0, dataLength = 3}) => {
  return (
    <View style={styles.root}>
      <View style={styles.line} />

      <View style={styles.content}>
        {Array(dataLength)
          .fill({})
          .map((step = '', index = 0) => (
            <Step
              key={`step-${index}`}
              number={index + 1}
              disabled={index > activeStep}
              done={index < activeStep}
              active={index === activeStep}
            />
          ))}
      </View>
    </View>
  );
};

export default React.memo(StepsIndicator);
