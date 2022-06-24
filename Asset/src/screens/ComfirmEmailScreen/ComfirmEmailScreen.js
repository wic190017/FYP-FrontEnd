import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Custominput from '../../components/Custominput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';


const ConfirmEmailScreen = () => {
  const [code, setCode] = useState('');
  const navigation = useNavigation();

  const OnComfirmPressed = () => {
    console.warn('Comfirm Pressed');
    navigation.navigate('HomeScreen')
  };
  
  const OnSignInPressed = () => {
    console.warn('Sign Up');
    navigation.navigate('SignIn')
  };
  const OnResendPressed = () => {
    console.warn('Resend Liao');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>

        <Custominput
          placeholder="Enter your Comfirmation Code"
          value={code}
          setValue={setCode}
        />
        <CustomButton text="Comfirm" onPress={OnComfirmPressed} />

        <CustomButton
          text="Resend Code"
          onPress={OnResendPressed}
          type="SECONDARY"
        />
        <CustomButton
          text="Back to Sign in"
          onPress={OnSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});
export default ConfirmEmailScreen;
