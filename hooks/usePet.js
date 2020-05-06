import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {RAIN, SNOW, SUNNY} from '../constants/forecast';
import useForecastData, {useForecastDataPropTypes} from './useForecastData';

export const usePetPropTypes = {
  data: PropTypes.shape(useForecastDataPropTypes).isRequired,
  petInit: PropTypes.string.isRequired,
  ext: PropTypes.string.isRequired,
};

usePet.propTypes = usePetPropTypes;

function usePet(props) {
  const {data, petInit} = props;
  const [pet, setPet] = useState('');
  const forecastData = useForecastData(data);

  const {temp, isSunny, isRain, isSnow} = forecastData;

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
    setPet(getFileName());
  }, [forecastData]);

  return pet;
}

export default usePet;
