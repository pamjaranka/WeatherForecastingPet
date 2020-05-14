import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FONTS, HOME_CONTAINER_STYLES} from '../styles/base';
import {Content} from 'native-base';

function LoadingHome() {
  return (
    <Content style={styles.container}>
      <Text style={styles.text}>Information will appear</Text>
      <Text style={styles.text}>very soon...</Text>
    </Content>
  );
}

const styles = StyleSheet.create({
  container: {
    ...HOME_CONTAINER_STYLES,
  },
  text: {
    fontFamily: FONTS.serifBold,
    fontSize: FONTS.xxl,
  },
});

export default LoadingHome;
