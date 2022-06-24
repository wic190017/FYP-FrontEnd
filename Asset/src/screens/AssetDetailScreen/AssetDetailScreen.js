import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import React, {Component, useState, useEffect} from 'react';
import SearchScreen from '../SearchScreen/SearchScreen';
import {useNavigation} from '@react-navigation/native';

const AssetDetailScreen = ({route}) => {
  const [data, setdata] = useState();
  const [DetailID, setDetailID] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    fetchPostsAPIinDetail();
    return () => {};
  }, []);

  const fetchPostsAPIinDetail = () => {
    setDetailID(route.params.answer);
    let arr = [];
    const URL = 'http://192.168.0.159:8000/asset/' + route.params.answer + '/';
    console.log(URL);
    fetch(URL)
      .then(response => response.json())
      .then(json => {
        arr.push(json);
        setdata(arr);
      })
      .catch(error => alert(error));
  };

  BackButtonPressed = () => {
    console.warn('Back Pressed');
    navigation.navigate('HomeScreen');
  };

  EditButtonPressed = () => {
    Alert.alert('Details', 'Are you Sure to edit Details?', [
      {
        text: 'Yes',
        onPress: () => {
          navigation.navigate({
            name: 'EditAssetScreen',
            params: {answer: DetailID},
          });
        },
      },
      {text: 'No', onPress: () => console.log('No is pressed')},
    ]);
    console.warn('Edit Pressed');
  };

  DeleteButtonPressed = () => {
    Alert.alert('Details', 'Are you Sure to Delete Asset?', [
      {
        text: 'Yes',
        onPress: () => {
          fetch(
            'http://192.168.0.159:8000/asset/' + route.params.answer + '/',
            {
              method: 'DELETE',
            },
          ).then(() => {
            navigation.navigate('HomeScreen'),
              console.warn('Delete Asset pressed');
          });
        },
      },
      {text: 'No', onPress: () => console.log('No is pressed')},
    ]);
  };
  const ItemView = ({item}) => {
    return (
      <View>
        <Text style={styles.assetsName1}>{item.Asset}</Text>
      </View>
    );
  };
  const ItemView2 = ({item}) => {
    return (
      <View>
        <Text style={styles.locationName1}>{item.Location}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.assets1}>Assets</Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={ItemView}
      />
      <Text style={styles.location1}>Location</Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={ItemView2}
      />
      <View style={styles.button1Row}>
        <TouchableOpacity onPress={DeleteButtonPressed} style={styles.button1}>
          <Text style={styles.ButtonText}>Delete Asset</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={EditButtonPressed} style={styles.button2}>
          <Text style={styles.ButtonText}>Edit Detail</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={BackButtonPressed} style={styles.button3}>
        <Text style={styles.ButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(230, 230, 230,1)',
  },
  assets1: {
    fontFamily: 'calibri-bold',
    color: '#121212',
    height: 37,
    width: 94,
    fontSize: 29,
    marginTop: 35,
    marginLeft: 29,
  },
  assetsName1: {
    fontFamily: 'calibri-regular',
    color: '#121212',
    fontSize: 29,
    textAlign: 'justify',
    marginTop: 5,
    marginLeft: 29,
  },
  location1: {
    fontFamily: 'calibri-bold',
    color: '#121212',
    height: 37,
    fontSize: 29,
    marginTop: 45,
    marginLeft: 29,
  },
  locationName1: {
    fontFamily: 'calibri-regular',
    color: '#121212',
    fontSize: 29,
    textAlign: 'justify',
    marginLeft: 29,
  },
  button1: {
    width: 151,
    height: 55,
    backgroundColor: 'rgba(239,183,183,1)',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 10,
    marginLeft: 15,
    justifyContent: 'center',
  },
  ButtonText: {
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  button2: {
    width: 151,
    height: 55,
    backgroundColor: 'rgba(239,183,183,1)',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 10,
    marginLeft: 13,
    justifyContent: 'center',
  },
  button1Row: {
    height: 55,
    flexDirection: 'row',
    marginTop: 335,
    marginLeft: 24,
    marginRight: 24,
  },
  button3: {
    width: 316,
    height: 55,
    backgroundColor: 'rgba(255,255,255,1)',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 10,
    marginTop: 11,
    marginBottom: 30,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
export default AssetDetailScreen;
