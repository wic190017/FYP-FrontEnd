import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Users} from '../../Data/FakeData/FakeData';
import {setSelectedLog} from 'react-native/Libraries/LogBox/Data/LogBoxData';
import {useNavigation} from '@react-navigation/native';
import {fetchPostsAPIinDetail} from '../AssetDetailScreen/AssetDetailScreen';

const SearchScreen = () => {
  const [filterdData, setfilterdData] = useState();
  const [masterData, setmasterData] = useState();
  const [search, setsearch] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    fetchPostsAPI();

    return () => {};
  }, []);

  const fetchPostsAPI = () => {
    const URL = 'http://192.168.0.159:8000/asset/';
    fetch(URL)
      .then(response => response.json())
      .then(json => {
        let cur_idx = 0;
        let newData = json.map(item => {
          cur_idx += 1;
          return {...item, viewid: cur_idx};
        });
        setmasterData(newData);
        setfilterdData(newData);
      })
      .catch(error => alert(error));
  };

  const searchFilter = text => {
    if (text) {
      let newData = masterData.filter(item => {
        const itemData = item.Asset
          ? item.Asset.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });

      setfilterdData(newData);
      setsearch(text);
    } else {
      setfilterdData(masterData);
      setsearch(text);
    }
  };


  const ItemView = ({item}) => {
    return (
      <TouchableOpacity onPress={() => pressHandler(item.id)}>
        <View>
          <Text style={styles.itemStyle}>
            {item.viewid}
            {'. '}
            {item.Asset}
          </Text>
          <Text style={styles.noteStyle}>Location : {item.Location}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const pressHandler = id => {
    console.log(id);
    navigation.navigate({name: 'AssetDetailScreen', params: {answer: id}});
  };

  const ItemSeparatorView = () => {
    return (
      <View style={{height: 1, width: '100%', backgroundColor: '#c8c8c8'}} />
    );
  };

  const addasset = () => {
    console.warn('Add Asset Click');
    navigation.navigate('AddAssetScreen');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TextInput
          style={styles.InputStyle}
          value={search}
          placeholder="Search Here"
          underlineColorAndroid="transparent"
          onChangeText={text => searchFilter(text)}
        />
        <TouchableOpacity style={styles.button} onPress={addasset}>
          <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={filterdData}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    color: 'black',
  },

  itemStyle: {
    padding: 10,
    color: 'black',
  },

  noteStyle: {
    marginLeft: 25,
    color: '#800000',
  },

  InputStyle: {
    height: 40,
    width: 330,
    paddingLeft: 20,
    margin: 5,
    borderWidth: 1,
  },

  button: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#009688',
    backgroundColor: 'rgba(221,71,71,1)',
    margin: 5,
    marginLeft: 5,
    alignItems: 'center',
  },
  plus: {
    flex: 1,
    color: 'white',
    bottom: 7,
    fontSize: 35,
  },
});

export default SearchScreen;
