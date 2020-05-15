import React from 'react';
import {View} from 'react-native';
import {forecastPropTypes} from './ContentContainer';
import ForecastData, {forecastDataPropTypes} from './ForecastData';
import ForecastPet from './ForecastPet';
import {PET_DOG} from '../constants/forecast';
import PropTypes from 'prop-types';
import usePet from '../hooks/usePet';

Forecast.propTypes = {
  data: PropTypes.shape(forecastDataPropTypes).isRequired,
  forecast: PropTypes.shape(forecastPropTypes).isRequired,
};

function Forecast(props) {
  const {
    currentData,
    forecast,
  } = props;

  const pet = usePet({
    forecast: forecast,
    petInit: PET_DOG,
  });
  console.log('Forecast');
  console.log(pet);

  return (
    <View>
      <ForecastData {...currentData} />
      <ForecastPet pet={pet} />
    </View>
  );
}

export default Forecast;
