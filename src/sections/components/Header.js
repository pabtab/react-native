/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
/* eslint-disable global-require */
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';

const Header = ({ children }) => (
  <View>
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          source={require('../../../assets/travel.png')}
          style={styles.logo}
        />
        <View style={styles.right}>
          {children}
        </View>
      </View>
    </SafeAreaView>
  </View>
);

const styles = StyleSheet.create({
  logo: {
    width: 180,
    height: 100,
    resizeMode: 'contain',
  },
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: 'orange',
    flexDirection: 'row',
  },
  right: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default Header;
