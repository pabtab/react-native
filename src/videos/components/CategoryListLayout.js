/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';

const CategoryListLayout = ({ title, children }) => (
  <ImageBackground source={require('../../../assets/background.jpeg')} style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    {children}
  </ImageBackground>
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    color: '#4c4c4c',
    fontWeight: 'bold',
    marginLeft: 8,

  },
});

export default CategoryListLayout;
