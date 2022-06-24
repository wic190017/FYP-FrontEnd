import {View, Text} from 'react-native';
import React from 'react';
import CustomButton from '../CustomButton/CustomButton';

const OnSignInFacebook = () => {
  console.warn('Sign in FaceBook');
};
const OnSignInGoogle = () => {
  console.warn('Sign in Google');
};
const OnSignInApple = () => {
  console.warn('Sign in Apple');
};
const SocialSignInButtons = () => {
  return (
    <>
      <CustomButton
        text="Sign in with Facebook"
        onPress={OnSignInFacebook}
        bgColor="#E7EAF4"
        fgColor={'#4765A9'}
      />
      <CustomButton
        text="Sign in with Google"
        onPress={OnSignInGoogle}
        bgColor="#FAE9EA"
        fgColor={'#DD4D44'}
      />
      <CustomButton
        text="Sign in with Apple"
        onPress={OnSignInApple}
        bgColor="#e3e3e3"
        fgColor={'#363636'}
      />
    </>
  );
};

export default SocialSignInButtons;
