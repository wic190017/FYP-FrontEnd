import {
    View,
    Text,
    Image,
    StyleSheet,
    useWindowDimensions,
    ScrollView,
  } from 'react-native';
  import React, {useState} from 'react';
  import Logo from '../../../assets/images/AssetLogo.png';
  import Custominput from '../../components/Custominput';
  import CustomButton from '../../components/CustomButton/CustomButton';
  import SocialSignInButtons from '../../components/SocialSignInButtons';
  import {useNavigation} from '@react-navigation/native';
  
  const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const {height} = useWindowDimensions();
    const navigation = useNavigation();
  
    const OnSignInPressed = () => {
      console.warn('Sign in');
      
      //Validate user
      
      navigation.navigate('HomeScreen');
    };
    const OnForgetPasswordPressed = () => {
      console.warn('Forget Password');
  
      navigation.navigate('ForgetPasswordScreen');
    };
    const OnSignUpPressed = () => {
      console.warn('Sign Up');
  
      navigation.navigate('SignUp');
    };
  
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <Image
            source={Logo}
            style={[styles.logo, {height: height * 0.3}]}
            resizeMode="contain"
          />
  
          <Custominput
            placeholder="Username"
            value={username}
            setValue={setUsername}
          />
          <Custominput
            placeholder="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry
          />
          <CustomButton text="Sign in" onPress={OnSignInPressed} />
          <CustomButton
            text="Forget Password"
            onPress={OnForgetPasswordPressed}
            type="TERTIARY"
          />
  
          <SocialSignInButtons />
  
          <CustomButton
            text="Do not have an account? Create one!"
            onPress={OnSignUpPressed}
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
    logo: {
      width: '70%',
      maxWidth: 300,
      maxHeight: 200,
    },
  });
  export default SignInScreen;
  