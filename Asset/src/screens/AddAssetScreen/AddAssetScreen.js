import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {Component, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const AddAssetScreen = () => {
  const [Asset, setAsset] = useState();
  const [Location, setLocation] = useState();
  const navigation = useNavigation();

  const AddAssetPress = () => {
    const asset = {Asset, Location};

    fetch('http://192.168.0.159:8000/asset/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(asset),
    }).then(() => {
      navigation.navigate('HomeScreen')
      console.warn('add asset pressed');
    });
  };

  const backPress = () => {
    console.warn('back pressed');
    navigation.navigate('SearchScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.loremIpsumRow}>
        <Text style={styles.loremIpsum}>Assets ：</Text>
        <View style={styles.textInputStack}>
          <TextInput
            placeholder=""
            style={styles.textInput}
            value={Asset}
            setValue={setAsset}
            onChangeText={setAsset}></TextInput>
        </View>
      </View>
      <View style={styles.locationRow}>
        <Text style={styles.location}>Location:</Text>
        <TextInput
          placeholder=""
          style={styles.textInput2}
          value={Location}
          setValue={setLocation}
          onChangeText={setLocation}></TextInput>
      </View>
      <TouchableOpacity onPress={AddAssetPress} style={styles.button}>
        <View>
          <Text style={styles.addAssetText}>Add Asset</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={backPress} style={styles.button2}>
        <View>
          <Text style={styles.BackText}>Back</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(230, 230, 230,1)',
  },
  loremIpsum: {
    fontFamily: 'calibri-regular',
    color: '#121212',
    fontSize: 29,
    marginTop: 5,
  },

  textInput: {
    fontSize: 25,
    top: 0,
    position: 'absolute',
    fontFamily: 'arial-regular',
    color: '#121212',
    height: 48,
    width: 223,
    borderWidth: 1,
    borderColor: 'rgba(4,52,214,1)',
    borderStyle: 'solid',
    borderRadius: 10,
    left: 0,
    backgroundColor: 'rgba(255,255,255,1)',
  },
  textInputStack: {
    width: 223,
    height: 48,
    marginLeft: 15,
  },
  text3: {
    fontFamily: 'calibri-regular',
    color: '#121212',
    fontSize: 29,
    marginLeft: 107,
    marginTop: 24,
  },
  loremIpsumRow: {
    height: 62,
    flexDirection: 'row',
    marginTop: 99,
    marginLeft: 13,
    marginRight: -203,
  },
  location: {
    fontFamily: 'calibri-regular',
    color: '#121212',
    fontSize: 29,
    marginTop: 6,
  },
  textInput2: {
    fontFamily: 'arial-regular',
    fontSize: 25,
    color: '#121212',
    height: 48,
    width: 223,
    borderWidth: 1,
    borderColor: 'rgba(4,52,214,1)',
    borderStyle: 'solid',
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,1)',
    marginLeft: 23,
  },
  locationRow: {
    height: 48,
    flexDirection: 'row',
    marginTop: 29,
    marginLeft: 8,
    marginRight: 14,
  },
  button: {
    width: 316,
    height: 55,
    backgroundColor: 'rgba(44,70,246,1)',
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 30,
    justifyContent: 'center',
  },
  addAssetText: {
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
  },

  button2: {
    width: 316,
    height: 55,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 10,
    marginTop: 25,
    marginLeft: 30,
    justifyContent: 'center',
  },
  BackText: {
    alignSelf: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
});
export default AddAssetScreen;
