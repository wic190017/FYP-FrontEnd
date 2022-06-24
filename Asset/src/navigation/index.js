import {Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ComfirmEmailScreen from '../screens/ComfirmEmailScreen';
import ForgetPasswordScreen from '../screens/ForgetPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SearchScreen from '../screens/SearchScreen/SearchScreen';
import AddAssetScreen from '../screens/AddAssetScreen';
import AssetDetailScreen from '../screens/AssetDetailScreen/AssetDetailScreen';
import EditAssetScreen from '../screens/EditAssetScreen';



const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen
          name="ComfirmEmailScreen"
          component={ComfirmEmailScreen}
        />
        <Stack.Screen
          name="ForgetPasswordScreen"
          component={ForgetPasswordScreen}
        />
        <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="AddAssetScreen" component={AddAssetScreen} />
        <Stack.Screen name="AssetDetailScreen" component={AssetDetailScreen} />
        <Stack.Screen name="EditAssetScreen" component={EditAssetScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
