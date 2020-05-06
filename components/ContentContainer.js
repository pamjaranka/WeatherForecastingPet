import React from 'react';
import LocationData from './LocationData';
import LocationSearch from './LocationSearch';
import Forecast from './Forecast';
import PropTypes from 'prop-types';
import {forecastDataPropTypes} from './ForecastData';

ContentContainer.propTypes = {
  city: PropTypes.string.isRequired,
  data: PropTypes.shape(forecastDataPropTypes).isRequired,
  changeCity: PropTypes.func.isRequired,
  updateGeolocation: PropTypes.func.isRequired,
};

function ContentContainer(props) {
  const {city, data, changeCity, updateGeolocation} = props;
  console.log(data);
  return (
    <>
      <LocationData
        locationCity={city}
        onUpdate={updateGeolocation}
      />
      <LocationSearch
        locationCity={city}
        onChange={changeCity} />
      <Forecast {...data} />
    </>
  );
}

export default ContentContainer;
