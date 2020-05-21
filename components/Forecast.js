import React from 'react';
import {forecastPropTypes} from './ContentContainer';
import {forecastDataPropTypes} from './ForecastData';
import ForecastPet from './ForecastPet';
import {PET_DOG} from '../constants/forecast';
import PropTypes from 'prop-types';
import usePet from '../hooks/usePet';

Forecast.propTypes = {
  // currentData: PropTypes.shape(forecastDataPropTypes).isRequired,
  forecast: PropTypes.shape(forecastPropTypes).isRequired,
};

function Forecast(props) {
  const {
    forecast,
  } = props;

  const pet = usePet({
    forecast: forecast,
    petInit: PET_DOG,
  });
  console.log('Forecast');
  console.log(pet);

  return (
    <>
      <ForecastPet pet={pet} />
    </>
  );
}


export default Forecast;
