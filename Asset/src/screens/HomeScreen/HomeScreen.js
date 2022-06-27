import {StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native';
import React, {Component} from 'react';
import Logo from '../../../assets/images/FP1.png';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const SearchPressed = () => {
    console.warn('SearchPress');
    navigation.navigate('SearchScreen');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={SearchPressed} style={styles.button1}>
        <Text style={styles.assetlist}>Asset List</Text>
      </TouchableOpacity>
      <Text style={styles.assets1}>Assets Tracking Home Screen</Text>
      <Image source={Logo} style={[styles.image]} resizeMode="contain" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(230, 230, 230,1)',
  },
  assetlist: {
    alignSelf: 'center',
    fontWeight: 'bold',
    
  },
  button1: {
    backgroundColor: 'white',
    height: 40,
    width: "97%",
    margin: 5,
    borderWidth: 1,
    justifyContent: 'center',
  },
  assets1: {
    fontFamily: 'calibri-bold',
    color: '#121212',
    height: 37,
    width: 2000,
    fontSize: 27,
    marginTop: 26,
    marginLeft: 13,
  },
  image: {
    width: 364,
    height: 338,
    marginTop: 67,
    marginLeft: 11,
  },
});
export default HomeScreen;
