import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {Component, useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const EditAssetScreen = ({route}) => {
  const [Asset, setAsset] = useState();
  const [Location, setLocation] = useState();
  const navigation = useNavigation();

  BackButtonPressed = () => {
    console.warn('Back Pressed');
    navigation.navigate('AssetDetailScreen');
  };
  SubmitButtonPressed = () => {
    const asset = {Asset, Location};
    fetch('http://192.168.0.159:8000/asset/' + route.params.answer + '/', {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(asset),
    }).then(() => {
      console.warn('Edit Asset pressed');
    });

    navigation.navigate('HomeScreen');
  };
  return (
    <View style={styles.container}>
      
      <View><Text style={styles.EditAssetText}>Edit Asset Screen</Text></View>
      <Text style={styles.assets1}>Assets</Text>
      <Text style={styles.location1}>Location</Text>
      <TextInput
        placeholder=""
        style={styles.textInput1}
        value={Asset}
        setValue={setAsset}
        onChangeText={setAsset}></TextInput>
      <TextInput
        placeholder=""
        style={styles.textInput2}
        value={Location}
        setValue={setLocation}
        onChangeText={setLocation}></TextInput>
      <TouchableOpacity onPress={SubmitButtonPressed} style={styles.button1}>
        <Text style={styles.SubmitText}>Edit Detail</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={BackButtonPressed} style={styles.button2}>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(230, 230, 230,1)',
  },
  EditAssetText: {
    fontFamily: 'calibri-regular',
    color: '#121212',
    fontSize: 29,
    marginTop: 5,
    marginBottom: -50,
    alignSelf: 'center',
  },
  assets1: {
    fontFamily: 'calibri-bold',
    color: '#121212',
    height: 37,
    width: 94,
    fontSize: 29,
    marginTop: 104,
    marginLeft: 29,
  },
  location1: {
    fontFamily: 'calibri-bold',
    color: '#121212',
    height: 37,
    width: 130,
    fontSize: 29,
    marginTop: 86,
    marginLeft: 29,
  },
  textInput1: {
    fontFamily: 'arial-regular',
    fontSize: 25,
    color: 'black',
    height: 48,
    width: 317,
    borderWidth: 1,
    borderColor: 'rgba(4,52,214,1)',
    borderStyle: 'solid',
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,1)',
    marginTop: -113,
    marginLeft: 29,
  },
  textInput2: {
    fontFamily: 'arial-regular',
    fontSize: 25,
    color: 'black',
    height: 48,
    width: 317,
    borderWidth: 1,
    borderColor: 'rgba(4,52,214,1)',
    borderStyle: 'solid',
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,1)',
    marginTop: 90,
    marginLeft: 29,
  },
  button1: {
    width: 316,
    height: 55,
    backgroundColor: 'rgba(44,70,246,1)',
    borderRadius: 10,
    marginTop: 230,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  SubmitText: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  button2: {
    width: 316,
    height: 55,
    backgroundColor: 'rgba(255,255,255,1)',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 10,
    marginTop: 14,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  backText: {
    alignSelf: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
});
export default EditAssetScreen;
