import React from 'react';
import LocationData from './LocationData';
import LocationSearch from './LocationSearch';
import Forecast from './Forecast';
import PropTypes from 'prop-types';
import {forecastDataPropTypes} from './ForecastData';

export const contentPropTypes = {
  city: PropTypes.string.isRequired,
  dataApi: PropTypes.shape(forecastDataPropTypes).isRequired,
  changeCity: PropTypes.func.isRequired,
  updateGeolocation: PropTypes.func.isRequired,
};

export const forecastPropTypes = {
  temp: PropTypes.string.isRequired,
  isSunny: PropTypes.bool.isRequired,
  isRain: PropTypes.bool.isRequired,
  isSnow: PropTypes.bool.isRequired,
};

ContentContainer.propTypes = {
  forecast: PropTypes.shape(forecastPropTypes).isRequired,
  ...contentPropTypes,
};

function ContentContainer(props) {
  const {city, dataApi, forecast, changeCity, updateGeolocation} = props;

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
        dataApi={dataApi}
        forecast={forecast}
      />
    </>
  );
}

export default ContentContainer;
