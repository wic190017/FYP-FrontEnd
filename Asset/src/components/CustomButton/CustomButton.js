import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';

const CustomButton = ({onPress, text, type = 'PRIMARY', bgColor, fgColor}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      <Text
        style={[
          styles.text,
          styles[`Text_${type}`],
          fgColor ? {color: fgColor} : {},
        ]}>
        {text}{' '}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',

    padding: 15,
    marginVertical: 5,

    alignItems: 'center',
    borderRadius: 5,
  },

  container_PRIMARY: {
    backgroundColor: '#3B71F3',
  },
  container_SECONDARY:{
    borderColor:'#3B71F3',
    borderWidth:2,
  },
  container_TERTIARY: {
    backgroundColor: '#FFFFFF',
  },

  Text_PRIMARY: {
    fontWeight: 'bold',
    color: 'white',
  },
  
  Text_SECONDARY:{
    color:'#3B71F3',
  },

  Text_TERTIARY: {
    fontWeight: 'bold',
    color: 'gray',
  },
});

export default CustomButton;
