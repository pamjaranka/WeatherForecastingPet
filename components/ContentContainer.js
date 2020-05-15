import React from 'react';
import {View} from 'react-native';
import LocationData from './LocationData';
import Forecast from './Forecast';
import PropTypes from 'prop-types';
import {forecastDataPropTypes} from './ForecastData';

export const forecastPropTypes = {
  temp: PropTypes.string.isRequired,
  isClouds: PropTypes.bool.isRequired,
  isSunny: PropTypes.bool.isRequired,
  isRain: PropTypes.bool.isRequired,
  isSnow: PropTypes.bool.isRequired,
  isWind: PropTypes.bool.isRequired,
};

ContentContainer.propTypes = {
  city: PropTypes.string.isRequired,
  currentData: PropTypes.shape(forecastDataPropTypes).isRequired,
  forecast: PropTypes.shape(forecastPropTypes).isRequired,
};

function ContentContainer(props) {
  const {
    city,
    currentData,
    forecast,
  } = props;
  console.log('ContentContainer');
  console.log(props);
  return (
    <View>
      <LocationData
        locationCity={city}
      />
      <Forecast
        currentData={currentData}
        forecast={forecast}
      />
    </View>
  );
}

export default ContentContainer;
