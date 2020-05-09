import React from 'react';
import {StyleSheet, View} from 'react-native';
import {PADDING} from '../styles/base';
import {forecastPropTypes} from './ContentContainer';
import ForecastData, {forecastDataPropTypes} from './ForecastData';
import ForecastPet from './ForecastPet';
import {PET_DOG} from '../constants/forecast';
import PropTypes from 'prop-types';

Forecast.propTypes = {
  data: PropTypes.shape(forecastDataPropTypes).isRequired,
  forecast: PropTypes.shape(forecastPropTypes).isRequired,
};

function Forecast(props) {
  const {
    data,
    forecast,
  } = props;
  // console.log('Forecast');

  return (
    <View style={styles.container}>
      <ForecastData {...data} />
      <ForecastPet petInit={PET_DOG} forecast={forecast} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: PADDING.md,
  },
});

export default Forecast;
