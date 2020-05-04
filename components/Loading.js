import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {padding, fonts} from '../styles/base';

function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather</Text>
      <Text style={styles.title}>Forecasting</Text>
      <Text style={styles.title}>Pet</Text>
      <Text>...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
    justifyContent: 'center',
    padding: padding.md,
  },
  title: {
    fontFamily: fonts.serifBold,
    fontSize: 42,
  },
});

export default Loading;
