import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
} from 'react-native';

const Suggestion = () => (
  <View style={styles.container}>
    <View style={styles.left}>
      <Image
        style={styles.cover}
        source={require('../../../assets/bmw-f700.jpg')}
      />
      <View style={styles.genre}>
        <Text style={styles.genreText}>Action</Text>
      </View>
    </View>
    <View style={styles.right}>
      <Text style={styles.title}>Avengers</Text>
      <Text style={styles.year}>2007</Text>
      <Text style={styles.rating}>5 stars</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

  },
  genre: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: 'black',
  },
  genreText: {
    fontSize: 11,
    color: 'white',
    paddingVertical: 5,
    paddingHorizontal: 7,
  },
  cover: {
    height: 150,
    width: 100,
    resizeMode: 'contain',
  },
  right: {
    paddingLeft: 10,
    justifyContent: 'space-between',

  },
  title: {
    fontSize: 18,
    color: '#44546b',
  },
  year: {
    backgroundColor: '#70b124',
    paddingVertical: 4,
    paddingHorizontal: 6,
    color: 'white',
    fontSize: 11,
    borderRadius: 5,
    overflow: 'hidden',
    alignSelf: 'flex-start',
  },
  rating: {
    color: '#6b6b6b',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Suggestion;
