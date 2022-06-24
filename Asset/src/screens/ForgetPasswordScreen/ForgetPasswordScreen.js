import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Custominput from '../../components/Custominput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

const ForgetPasswordScreen = () => {
  const [username, setUsername] = useState('');
  const navigation = useNavigation();
  const SendPressed = () => {
    console.warn('Send Pressed');
    navigation.navigate('NewPasswordScreen')
  };

  const OnSignInPressed = () => {
    console.warn('Sign In');
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your Password</Text>

        <Custominput
          placeholder="Enter your Comfirmation Code"
          value={username}
          setValue={setUsername}
        />
        <CustomButton text="Send" onPress={SendPressed} />

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
export default ForgetPasswordScreen;
