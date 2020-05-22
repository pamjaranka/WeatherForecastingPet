import React, {useState, useEffect} from 'react';
import {
  CLOUDS,
  RAIN,
  SNOW,
  SUNNY,
  WIND,
} from '../constants/forecast';
import {PHRASE, WEATHER_PHRASES} from '../constants/weatherPhrases';
import {forecastPropTypes} from '../utils/forecast';
import PropTypes from 'prop-types';

useWeatherPhrases.propTypes = {
  init: PropTypes.string,
  params: PropTypes.shape(forecastPropTypes).isRequired,
};

function useWeatherPhrases(props) {
  const {init, params} = props;
  const [weatherPhrase, setWeatherPhrase] = useState(init || 'Welcome');
  const getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  const pickWeatherPhrase = () => {
    if (!params) return init;

    const {temp, isSunny, isRain, isSnow, isWind, isClouds} = params;

    let phraseKey = PHRASE;

    if (isWind) {
      phraseKey += WIND;
    } else if (isSunny) {
      phraseKey += SUNNY;
    } else if (isRain) {
      phraseKey += RAIN;
    } else if (isSnow) {
      phraseKey += SNOW;
    } else if (isClouds) {
      phraseKey += CLOUDS;
    } else if (temp) {
      phraseKey += temp;
    }

    return WEATHER_PHRASES[phraseKey][getRandomInt(WEATHER_PHRASES[phraseKey].length)];
  };

  useEffect(() => {
    // console.log('weather phrase WILL change');
    setWeatherPhrase(pickWeatherPhrase());
  }, [params]);

  return weatherPhrase;
}

export default useWeatherPhrases;
