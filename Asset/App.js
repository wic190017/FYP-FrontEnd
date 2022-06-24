import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import SearchScreen from './src/screens/SearchScreen/SearchScreen';
import Navigation from './src/navigation';
import LearnScreen, {pressHandler} from './src/screens/LearnScreen';
import AddAssetScreen from './src/screens/AddAssetScreen';
import AssetDetailScreen from './src/screens/AssetDetailScreen/AssetDetailScreen';
import EditAssetScreen from './src/screens/EditAssetScreen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});

export default App;
