import React from 'react';
import {Text, View} from 'react-native';
import LocationData from './LocationData';
import LocationSearchForm from './LocationSearchForm';
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
  data: PropTypes.shape(forecastDataPropTypes).isRequired,
  forecast: PropTypes.shape(forecastPropTypes).isRequired,
  changeCity: PropTypes.func.isRequired,
  updateGeolocation: PropTypes.func.isRequired,
  showLocationSearchForm: PropTypes.bool.isRequired,
  isCityError: PropTypes.bool.isRequired,
};

function ContentContainer(props) {
  const {
    city,
    data,
    forecast,
    changeCity,
    updateGeolocation,
    showLocationSearchForm,
    isCityError,
  } = props;

  return (
    <>
      {showLocationSearchForm ? (
        <LocationSearchForm
          onFormSubmit={changeCity}
          isCityError={isCityError} />
      ) : isCityError ? (
        <Text>Please update your city data or search some city.</Text>
      ) : (
        <View>
          <LocationData
            locationCity={city}
          />
          <Forecast
            data={data}
            forecast={forecast}
          />
        </View>
      )}
    </>
  );
}

export default ContentContainer;
