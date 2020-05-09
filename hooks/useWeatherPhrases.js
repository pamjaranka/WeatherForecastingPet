import React, {useState, useEffect} from 'react';
import {
  RAIN,
  SNOW,
  SUNNY,
} from '../constants/forecast';
import {PHRASE, WEATHER_PHRASES} from '../constants/weatherPhrases';
import {forecastDataPropTypes} from '../components/ContentContainer';

useWeatherPhrases.propTypes = forecastDataPropTypes;

function useWeatherPhrases(initPhrase, forecast) {
  const [weatherPhrase, setWeatherPhrase] = useState(initPhrase || 'Welcome');

  const getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  const pickWeatherPhrase = () => {
    if (!forecast) return initPhrase;

    const {temp, isSunny, isRain, isSnow} = forecast;

    let phraseKey = PHRASE;

    if (temp) {
      phraseKey += temp;
    } else if (isSunny) {
      phraseKey += SUNNY;
    } else if (isRain) {
      phraseKey += RAIN;
    } else if (isSnow) {
      phraseKey += SNOW;
    }
    console.log(phraseKey);
    console.log(WEATHER_PHRASES[phraseKey]);

    return WEATHER_PHRASES[phraseKey][getRandomInt(WEATHER_PHRASES[phraseKey].length)];
  };

  useEffect(() => {
    setWeatherPhrase(pickWeatherPhrase());
  }, [forecast]);

  return weatherPhrase;
}

export default useWeatherPhrases;
