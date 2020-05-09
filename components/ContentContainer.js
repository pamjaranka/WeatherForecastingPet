import React from 'react';
import LocationData from './LocationData';
import LocationSearch from './LocationSearch';
import Forecast from './Forecast';
import PropTypes from 'prop-types';
import {forecastDataPropTypes} from './ForecastData';

export const forecastPropTypes = {
  temp: PropTypes.string.isRequired,
  isSunny: PropTypes.bool.isRequired,
  isRain: PropTypes.bool.isRequired,
  isSnow: PropTypes.bool.isRequired,
};

export const contentPropTypes = {
  city: PropTypes.string.isRequired,
  data: PropTypes.shape(forecastDataPropTypes).isRequired,
  forecast: PropTypes.shape(forecastPropTypes).isRequired,
  changeCity: PropTypes.func.isRequired,
  updateGeolocation: PropTypes.func.isRequired,
};

ContentContainer.propTypes = contentPropTypes;

function ContentContainer(props) {
  const {city, data, forecast, changeCity, updateGeolocation, updateWeatherPhrase} = props;
  // updateWeatherPhrase(forecast);
  return (
    <>
      <LocationData
        locationCity={city}
        onUpdate={updateGeolocation}
      />
      <LocationSearch
        locationCity={city}
        onChange={changeCity} />
      <Forecast
        data={data}
        forecast={forecast}
      />
    </>
  );
}

export default ContentContainer;
