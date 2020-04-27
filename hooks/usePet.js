import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import {
  RAIN,
  SNOW,
  SUNNY,
  TEMP_COLD,
  TEMP_FROSTY,
  TEMP_HOT,
  TEMP_MILD,
  TEMP_WARM,
} from '../constants/forecast';

export const usePetPropTypes = {
  data: PropTypes.shape({
    feels_like: PropTypes.number.isRequired,
    main: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    clouds: PropTypes.number.isRequired,
    rain: PropTypes.object,
    snow: PropTypes.object,
  }),
  petInit: PropTypes.string.isRequired,
  ext: PropTypes.string.isRequired,
};

usePet.propTypes = usePetPropTypes;

function usePet(props) {
  const {data, petInit, ext} = props;
  const [pet, setPet] = useState('');

  const {
    feels_like,
    main,
    description,
    clouds,
    rain,
    snow,
  } = data;

  const getFileName = () => {
    let fileName = petInit;

    if (feels_like >= 28) {
      fileName += TEMP_HOT;
    } else if (feels_like >= 22 && feels_like < 28) {
      fileName += TEMP_WARM;
    } else if (feels_like >= 12 && feels_like < 22) {
      fileName += TEMP_MILD;
    } else if (feels_like >= -12 && feels_like < 12) {
      fileName += TEMP_COLD;
    } else if (feels_like < -12) {
      fileName += TEMP_FROSTY;
    }

    if (clouds < 18) {
      fileName += SUNNY;
    }
    if (
      rain ||
      main.indexOf('rain') >= 0 ||
      description.indexOf('rain') >= 0
    ) {
      fileName += RAIN;
    } else if (
      snow ||
      main.indexOf('snow') >= 0 ||
      description.indexOf('snow') >= 0
    ) {
      fileName += SNOW;
    }

    return fileName;
    // return `../assets/images/${fileName}.gif`;
  };

  useEffect(() => {
    setPet(getFileName());
  }, []);

  return pet;
};

export default usePet;
