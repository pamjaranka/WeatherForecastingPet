import React from 'react';
import {StyleSheet, View} from 'react-native';
import {PADDING} from '../styles/base';
import ForecastData, {forecastDataPropTypes} from './ForecastData';
import ForecastPet from './ForecastPet';
import {PET_DOG} from '../constants/forecast';

Forecast.propTypes = forecastDataPropTypes;

function Forecast(props) {
  // console.log('Forecast');
  return (
    <View style={styles.container}>
      <ForecastData {...props} />
      <ForecastPet petInit={PET_DOG} data={{...props}} ext="gif" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: PADDING.md,
  },
});

export default Forecast;
