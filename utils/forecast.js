import {
  CLOUDS_MEASURE,
  TEMP_COLD, TEMP_FROSTY,
  TEMP_HOT, TEMP_MEAUSURE_COLD,
  TEMP_MEAUSURE_HOT,
  TEMP_MEAUSURE_MILD,
  TEMP_MEAUSURE_WARM,
  TEMP_MILD,
  TEMP_WARM,
  WIND_MEASURE,
} from '../constants/forecast';
import PropTypes from 'prop-types';

export const forecastPropTypes = {
  temp: PropTypes.string.isRequired,
  isClouds: PropTypes.bool.isRequired,
  isSunny: PropTypes.bool.isRequired,
  isRain: PropTypes.bool.isRequired,
  isSnow: PropTypes.bool.isRequired,
  isWind: PropTypes.bool.isRequired,
};

export const getForecast = data => {
  const {feels_like, main, description, clouds, rain, snow, wind} = data;
  console.log('getForecast');
  const checkTemp = () => {
    if (feels_like >= TEMP_MEAUSURE_HOT) {
      return TEMP_HOT;
    } else if (
      feels_like >= TEMP_MEAUSURE_WARM &&
      feels_like < TEMP_MEAUSURE_HOT
    ) {
      return TEMP_WARM;
    } else if (
      feels_like >= TEMP_MEAUSURE_MILD &&
      feels_like < TEMP_MEAUSURE_WARM
    ) {
      return TEMP_MILD;
    } else if (
      feels_like >= TEMP_MEAUSURE_COLD &&
      feels_like < TEMP_MEAUSURE_MILD
    ) {
      return TEMP_COLD;
    } else if (feels_like < TEMP_MEAUSURE_COLD) {
      return TEMP_FROSTY;
    }
  };
  const checkWord = word => {
    return main.indexOf(word) >= 0 || description.indexOf(word) >= 0;
  };

  const forecast = {
    temp: checkTemp(),
    isSunny: clouds < CLOUDS_MEASURE,
    isClouds: clouds >= CLOUDS_MEASURE,
    isRain: rain !== null || checkWord('rain'),
    isSnow: snow !== null || checkWord('snow'),
    isWind: wind.speed && wind.speed > WIND_MEASURE,
  };

  return forecast;
};
