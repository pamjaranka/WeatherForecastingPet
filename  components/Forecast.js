import React from 'react';
import {StyleSheet, View} from 'react-native';
import {padding} from '../styles/base';
import ForecastData, {forecastDataPropTypes} from './ForecastData';

Forecast.propTypes = forecastDataPropTypes;

function Forecast(props) {
  return (
    <View style={styles.container}>
      <ForecastData {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: padding.md,
  },
});

export default Forecast;
