import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

import { Styles } from './Styles';
import ErrorBoundary from './components/ErrorBoundry';
import colors from '../../utils/Colors';
import { isAndroid } from '../../utils/HelperFunctions';
import CustomText from './components/CustomText';
import CustomTextInput from './components/CustomTextInput';
import FullButtonComponent from './components/FullButtonComponent';
import auth from '@react-native-firebase/auth';

const OTPScreen = function ({ route: { params: { phoneNumber } }, navigation }) {
  const [otpArray, setOtpArray] = useState(['', '', '', '']);
  const [submittingOtp, setSubmittingOtp] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [confirm, setConfirm] = useState(null);

  const firstTextInputRef = useRef(null);
  const secondTextInputRef = useRef(null);
  const thirdTextInputRef = useRef(null);
  const fourthTextInputRef = useRef(null);
  const fivthTextInputRef = useRef(null);
  const sixthTextInputRef = useRef(null);

  const refCallback = textInputRef => node => {
    textInputRef.current = node;
  };

  useEffect(() => {
    signInWithPhoneNumber();
  }, [])

  async function signInWithPhoneNumber() {
   try{
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    }catch(e){
     alert(JSON.stringify(e));
   }
  }

  async function confirmCode() {
    try{
    const code = otpArray.join("");
    const response = await confirm.confirm(code);
    if(response){
      navigation.navigate('successScreen');
    }
    } catch(e){
      alert(JSON.stringify(e));
    }
  }
  const onOtpChange = index => {
    return value => {
      if (isNaN(Number(value))) {
        return;
      }
      const otpArrayCopy = otpArray.concat();
      otpArrayCopy[index] = value;
      setOtpArray(otpArrayCopy);
      if (value !== '') {
        if (index === 0) {
          secondTextInputRef.current.focus();
        } else if (index === 1) {
          thirdTextInputRef.current.focus();
        } else if (index === 2) {
          fourthTextInputRef.current.focus();
        } else if (index === 3) {
          fivthTextInputRef.current.focus();
        } else if (index === 4) {
          sixthTextInputRef.current.focus();
          setSubmittingOtp(false);
        }
      }
    };
  };

  const onOtpKeyPress = index => {
    return ({ nativeEvent: { key: value } }) => {
      if (value === 'Backspace' && otpArray[index] === '') {
        if (index === 1) {
          firstTextInputRef.current.focus();
        } else if (index === 2) {
          secondTextInputRef.current.focus();
        } else if (index === 3) {
          thirdTextInputRef.current.focus();
        } else if (index === 4) {
          fourthTextInputRef.current.focus();
        } else if (index === 5) {
          fivthTextInputRef.current.focus();
        }
        if (isAndroid && index > 0) {
          const otpArrayCopy = otpArray.concat();
          otpArrayCopy[index - 1] = '';
          setOtpArray(otpArrayCopy);
        }
      }
    };
  };

  return (
    <ErrorBoundary screenName={'OTPScreen'}>
      <View style={styles.container}>
        <CustomText>
          Enter OTP sent to your{' ' + phoneNumber}
        </CustomText>
        <View style={[Styles.row, Styles.mt12]}>
          {[
            firstTextInputRef,
            secondTextInputRef,
            thirdTextInputRef,
            fourthTextInputRef,
            fivthTextInputRef,
            sixthTextInputRef,
          ].map((textInputRef, index) => (
            <CustomTextInput
              containerStyle={[Styles.fill, Styles.mr12]}
              value={otpArray[index]}
              onKeyPress={onOtpKeyPress(index)}
              onChangeText={onOtpChange(index)}
              keyboardType={'numeric'}
              maxLength={1}
              style={[styles.otpText, Styles.centerAlignedText]}
              autoFocus={index === 0 ? true : undefined}
              refCallback={refCallback(textInputRef)}
              key={index}
            />
          ))}
        </View>
        {errorMessage ? (
          <CustomText
            style={[
              Styles.negativeText,
              Styles.mt12,
              Styles.centerAlignedText,
            ]}>
            {errorMessage}
          </CustomText>
        ) : null}

        <FullButtonComponent
          type={'fill'}
          text={'Submit'}
          textStyle={styles.submitButtonText}
          buttonStyle={Styles.mt24}
          onPress={() => confirmCode()}
          disabled={submittingOtp}
        />
      </View>
    </ErrorBoundary>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    alignItems: 'center',
    paddingTop: 130,
  },
  submitButtonText: {
    color: colors.WHITE,
  },
  otpText: {
    color: colors.BLUE,
    fontSize: 18,
    width: '100%',
  },
});

export default OTPScreen;