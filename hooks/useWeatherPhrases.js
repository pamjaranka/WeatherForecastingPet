import React, {useState, useEffect} from 'react';
import {
  CLOUDS,
  RAIN,
  SNOW,
  SUNNY,
  WIND,
} from '../constants/forecast';
import {PHRASE, WEATHER_PHRASES} from '../constants/weatherPhrases';
import {forecastDataPropTypes} from '../components/ContentContainer';

useWeatherPhrases.propTypes = forecastDataPropTypes;

function useWeatherPhrases(initPhrase, forecast) {
  const [weatherPhrase, setWeatherPhrase] = useState(initPhrase || 'Welcome');
  // console.log('useWeatherPhrases');
  const getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  const pickWeatherPhrase = () => {
    if (!forecast) return initPhrase;

    const {temp, isSunny, isRain, isSnow, isWind, isClouds} = forecast;

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
    // console.log(phraseKey);
    // console.log(WEATHER_PHRASES[phraseKey]);

    return WEATHER_PHRASES[phraseKey][getRandomInt(WEATHER_PHRASES[phraseKey].length)];
  };

  useEffect(() => {
    // console.log('weather phrase WILL change');
    setWeatherPhrase(pickWeatherPhrase());
  }, [forecast]);

  return weatherPhrase;
}

export default useWeatherPhrases;
