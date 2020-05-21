import React from 'react';
import {StyleSheet, View} from 'react-native';
import LocationData from './LocationData';
import Forecast from './Forecast';
import ForecastData, {forecastDataPropTypes} from './ForecastData';
import Tabs from './Tabs';
import PropTypes from 'prop-types';
import {COLORS, CONTAINER_STYLES, HOME_CONTAINER_STYLES, PADDING} from '../styles/base';

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
    forecastData,
    forecast,
  } = props;
  console.log('ContentContainer');
  console.log(props);
  return (
    <View>
      <LocationData
        locationCity={city}
      />
      <View style={styles.tabs}>
        <Tabs
          forecastData={forecastData}
          activeColor={COLORS.blue}
          backgroundColor={COLORS.lightGrey}
        />
      </View>
      <ForecastData {...currentData} />
      <View style={styles.container}>
        <Forecast forecast={forecast} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...CONTAINER_STYLES,
  },
  tabs: {
    ...HOME_CONTAINER_STYLES,
  },
});

export default ContentContainer;
