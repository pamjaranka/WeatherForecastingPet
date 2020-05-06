import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {
  TEMP_COLD,
  TEMP_FROSTY,
  TEMP_HOT,
  TEMP_MILD,
  TEMP_WARM,
} from '../constants/forecast';

export const useForecastDataPropTypes = {
  feels_like: PropTypes.number.isRequired,
  main: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  clouds: PropTypes.number.isRequired,
  rain: PropTypes.object,
  snow: PropTypes.object,
};

useForecastData.propTypes = useForecastDataPropTypes;

function useForecastData(props) {
  const [temp, setTemp] = useState('');
  const [isSunny, setIsSunny] = useState(false);
  const [isRain, setIsRain] = useState(false);
  const [isSnow, setIsSnow] = useState(false);
  const {
    feels_like,
    main,
    description,
    clouds,
    rain,
    snow,
  } = props;

  console.log(props);

  useEffect(() => {
    if (feels_like >= 28) {
      setTemp(TEMP_HOT);
    } else if (feels_like >= 22 && feels_like < 28) {
      setTemp(TEMP_WARM);
    } else if (feels_like >= 12 && feels_like < 22) {
      setTemp(TEMP_MILD);
    } else if (feels_like >= -12 && feels_like < 12) {
      setTemp(TEMP_COLD);
    } else if (feels_like < -12) {
      setTemp(TEMP_FROSTY);
    }

    if (clouds < 18) {
      setIsSunny(true);
    }

    if (
      rain ||
      main.indexOf('rain') >= 0 ||
      description.indexOf('rain') >= 0
    ) {
      setIsRain(true);
    }

    if (
      snow ||
      main.indexOf('snow') >= 0 ||
      description.indexOf('snow') >= 0
    ) {
      setIsSnow(true);
    }
  }, []);
  return {temp, isSunny, isRain, isSnow};
}

export default useForecastData;
