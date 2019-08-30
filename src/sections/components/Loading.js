import React from 'react';
import {
  View, Text, StyleSheet, ActivityIndicator, Image,
} from 'react-native';

const Loading = props => (
  <View style={styles.container}>
    <Image
      source={require('../../../assets/bmw-f700.jpg')}
      style={styles.logo}
    />
    <ActivityIndicator />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 10,
    width: '100%',
    resizeMode: 'contain',
  },
});

export default Loading;
