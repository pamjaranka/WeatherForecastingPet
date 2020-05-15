import React from 'react';
import {View} from 'react-native';
import RefreshCity from '../components/RefreshCity';
import {StyleSheet} from 'react-native';
import {CONTAINER_STYLES, PADDING} from '../styles/base';
import ForecastPetImage from '../components/ForecastPetImage';
import {IMAGE_ERROR} from '../constants/imageSource';

function ErrorCityScreen({route}) {
  console.log('ErrorCityScreen');
  return (
    <View style={styles.container}>
      <RefreshCity {...route.params} />
      <View style={styles.image}>
        <ForecastPetImage pet={IMAGE_ERROR} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    ...CONTAINER_STYLES,
  },
  image: {
    marginBottom: PADDING.xxl,
    marginTop: 'auto',
    alignSelf: 'center',
  },
});

export default ErrorCityScreen;
