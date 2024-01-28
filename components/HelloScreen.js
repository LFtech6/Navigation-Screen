// HelloScreen.js

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HelloScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.title}>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 35,
    color: '#000',
    marginTop: 50,
  },
});

export default HelloScreen;