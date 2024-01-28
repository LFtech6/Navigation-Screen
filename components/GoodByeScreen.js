// GoodByeScreen.js

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const GoodByeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.title}>Goodbye</Text>
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

export default GoodByeScreen;
