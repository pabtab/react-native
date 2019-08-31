/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';

const SuggestionListLayout = ({ title, children }) => (
  <ScrollView style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    {children}
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    color: '#4c4c4c',
    fontWeight: 'bold',
    marginLeft: 8,

  },
});

export default SuggestionListLayout;
