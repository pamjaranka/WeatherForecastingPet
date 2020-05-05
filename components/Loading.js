import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PADDING, FONTS, COLORS} from '../styles/base';

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
    backgroundColor: COLORS.white,
    flex: 1,
    justifyContent: 'center',
    padding: PADDING.md,
  },
  title: {
    fontFamily: FONTS.serifBold,
    fontSize: 42,
  },
});

export default Loading;
