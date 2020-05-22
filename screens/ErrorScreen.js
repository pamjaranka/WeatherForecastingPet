import React from 'react';
import {Text} from 'react-native';
import {StyleSheet} from 'react-native';
import {FONTS, HOME_CONTAINER_STYLES} from '../styles/base';
import {Content} from "native-base";

function ErrorScreen({route}) {
  console.log('ErrorScreen');
  return (
    <Content style={styles.container}>
      <Text style={styles.text}>Something went wrong...</Text>
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

export default ErrorScreen;
