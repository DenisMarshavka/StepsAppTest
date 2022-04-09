import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import Step from './Step';
import propType from 'prop-types';

const StepsIndicator = ({activeStep, dataLength}) => (
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

StepsIndicator.propTypes = {
  activeStep: propType.number,
  dataLength: propType.number,
};
StepsIndicator.defalutProps = {
  activeStep: 0,
  dataLength: 1,
};

export default React.memo(StepsIndicator);
