import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {
  RAIN,
  SNOW,
  SUNNY,
} from '../constants/forecast';

import {forecastPropTypes} from '../utils/forecast';

export const usePetPropTypes = {
  forecast: PropTypes.shape(forecastPropTypes).isRequired,
  petInit: PropTypes.string.isRequired,
};

usePet.propTypes = usePetPropTypes;

function usePet(props) {
  const {petInit, forecast} = props;
  const [pet, setPet] = useState('');

  const {temp, isSunny, isRain, isSnow} = forecast;
  // console.log('usePet');

  const getFileName = () => {
    let fileName = `${petInit}${temp}`;

    if (isSunny) {
      fileName += SUNNY;
    }

    if (isRain) {
      fileName += RAIN;
    }

    if (isSnow) {
      fileName += SNOW;
    }

    return fileName;
  };

  useEffect(() => {
    console.log('Pet WILL change');
    setPet(getFileName());
  }, [forecast]);

  return pet;
}

export default usePet;
