import React from 'react';
import {StyleSheet, View} from 'react-native';
import LocationData from './LocationData';
import ForecastData from './ForecastData';
import Tabs from './Tabs';
import PropTypes from 'prop-types';
import {
  COLORS,
  CONTAINER_STYLES,
  HOME_CONTAINER_STYLES,
  PADDING,
} from '../styles/base';
import ForecastPet from './ForecastPet';
import {forecastPropTypes} from '../utils/forecast';
import {forecastDataPropTypes} from './ForecastData';

ContentContainer.propTypes = {
  city: PropTypes.string.isRequired,
  activeForecastIndex: PropTypes.number.isRequired,
  onTabPress: PropTypes.func.isRequired,
  forecastData: PropTypes.PropTypes.arrayOf(
    PropTypes.shape({
      ...forecastDataPropTypes,
      params: PropTypes.shape(forecastPropTypes).isRequired,
    }),
  ).isRequired,
};

function ContentContainer(props) {
  const {
    city,
    forecastData,
    activeForecastIndex,
    onTabPress,
  } = props;

  const activeForecastData = forecastData[activeForecastIndex] || forecastData[0];

  console.log('ContentContainer');
  console.log(props);
  return (
    <View>
      <LocationData
        date={activeForecastData.dt}
        locationCity={city}
      />
      <View style={styles.tabs}>
        <Tabs
          forecastData={forecastData}
          activeColor={COLORS.blue}
          backgroundColor={COLORS.lightGrey}
          activeTab={activeForecastIndex}
          onTabPress={onTabPress}
        />
      </View>
      <ForecastData activeForecastData={activeForecastData} />
      <View style={styles.container}>
        <ForecastPet forecast={activeForecastData.params} />
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
    paddingTop: PADDING.md,
  },
});

export default ContentContainer;
