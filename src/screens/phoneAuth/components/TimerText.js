import React from 'react';
import {StyleSheet} from 'react-native';
import CustomText from './CustomText';
import {Styles} from '../Styles';

const TimerText = props => {
  const {text, time} = props;
  return (
    <CustomText
      style={[
        Styles.centerAlignedText,
        styles.resendOtpTimerText,
        Styles.mt24,
      ]}>
      {text}
      <CustomText style={Styles.bold}>{' ' + time}s</CustomText>
    </CustomText>
  );
};

const styles = StyleSheet.create({
  resendOtpTimerText: {
    fontSize: 12,
  },
});

export default TimerText;