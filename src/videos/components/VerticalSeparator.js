import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const VerticalSeparator = ({ color }) => (
  <View style={[
    styles.separator,
    {
      borderTopColor: color || '#eaeaea',
    },
  ]}
  >
    <Text>This is separator </Text>
  </View>
);

const styles = StyleSheet.create({
  separator: {
    borderTopWidth: 1,
  },
});

export default VerticalSeparator;
