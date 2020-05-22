import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';
import {FONTS, COLORS, PADDING, HOME_CONTAINER_STYLES, CONTAINER_STYLES} from '../styles/base';
import ForecastPet from './ForecastPet';
import {forecastPropTypes} from '../utils/forecast';

export const forecastDataPropTypes = {
  dt: PropTypes.number.isRequired,
  temp: PropTypes.number.isRequired,
  temp_max: PropTypes.number.isRequired,
  temp_min: PropTypes.number.isRequired,
  feels_like: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  pressure: PropTypes.number.isRequired,
  main: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  clouds: PropTypes.number.isRequired,
  rain: PropTypes.object,
  snow: PropTypes.object,
  wind: PropTypes.shape({
    speed: PropTypes.number,
    deg: PropTypes.number,
  }).isRequired,
  params: PropTypes.shape(forecastPropTypes).isRequired,
};

Forecast.propTypes = {
  activeForecastData: PropTypes.shape(forecastDataPropTypes).isRequired,
};

function Forecast(props) {
  const {
    activeForecastData: {
      temp,
      temp_max,
      temp_min,
      feels_like,
      humidity,
      pressure,
      main,
      description,
      wind,
      clouds,
      params,
    },
  } = props;

  return (
    <>
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.superBig}> {Math.round(temp)}˚C</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.infoMainBig}>{Math.round(feels_like)}˚C</Text>
            <Text style={styles.desc}>(feels like)</Text>
          </View>
        </View>
        <View style={styles.containerBottom}>
          <View style={styles.column}>
            <Text style={styles.main}>{main}</Text>
            <Text style={styles.desc}>({description})</Text>
          </View>
          <View style={styles.column}>
            {/*<Text style={styles.infoMainBig}>{Math.round(temp_min)}˚C / {Math.round(temp_max)}˚C</Text>*/}
            {/*<Text style={styles.desc}>(min / max)</Text>*/}
            <View style={styles.row}>
              <View style={styles.column}>
                <Text style={styles.infoMainBig}>{Math.round(temp_min)}˚C</Text>
                <Text style={styles.desc}>(min)</Text>
              </View>
              <View style={styles.column}>
                <Text style={styles.infoMainBig}>{Math.round(temp_max)}˚C</Text>
                <Text style={styles.desc}>(max)</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.image}>
        <ForecastPet forecast={params} />
      </View>
      <View style={styles.additional}>
        <Text style={styles.subtitle}>Additional Info</Text>
        <View style={styles.row}>
          <View style={styles.column}>
            <View style={styles.row}>
              <Text style={styles.label}>Cloudy</Text>
              <Text style={styles.info}>{clouds}%</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Humidity</Text>
              <Text style={styles.info}>{humidity}%</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Pressure</Text>
              <Text style={styles.info}>{pressure} hpa</Text>
            </View>
          </View>
          <View style={styles.column}>
            {wind && wind.speed ? (
              <View style={styles.row}>
                <Text style={styles.label}>Wind</Text>
                <Text style={styles.info}>{wind.speed} m/s</Text>
              </View>
            ) : (
              <></>
            )}
            {wind && wind.deg ? (
              <View style={styles.row}>
                <Text style={styles.label}>Wind (dir)</Text>
                <Text style={styles.info}>{wind.deg}˚</Text>
              </View>
            ) : (
              <></>
            )}
          </View>
        </View>
      </View>
    </>
  );
}

const infoStyles = {
  fontFamily: FONTS.primary,
  fontSize: FONTS.md,
  paddingRight: 5,
};

const styles = StyleSheet.create({
  container: {
    ...HOME_CONTAINER_STYLES,
    paddingBottom: PADDING.sm,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: PADDING.xs,
  },
  column: {
    flex: 1,
  },
  infoMainBig: {
    ...infoStyles,
    fontFamily: FONTS.serif,
    fontSize: FONTS.xl,
    marginTop: PADDING.xs,
  },
  infoMain: {
    ...infoStyles,
  },
  containerBottom: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: PADDING.xs,
    marginTop: PADDING.sm,
  },
  label: {
    color: COLORS.darkGrey,
    fontFamily: FONTS.primary,
    fontSize: FONTS.md,
    flex: 1,
  },
  info: {
    ...infoStyles,
    flex: 1,
  },
  superBig: {
    fontFamily: FONTS.serifBold,
    fontSize: FONTS.xxxl,
    marginLeft: -5,
  },
  main: {
    fontSize: 30,
  },
  desc: {
    color: COLORS.darkGrey,
  },
  big: {
    fontFamily: FONTS.bold,
    fontSize: FONTS.xl,
  },
  image: {
    ...CONTAINER_STYLES,
    paddingTop: 0,
  },
  additional: {
    ...CONTAINER_STYLES,
    paddingBottom: PADDING.md,
  },
  subtitle: {
    fontFamily: FONTS.bold,
    fontSize: 20,
    marginBottom: PADDING.sm,
  },
});

export default Forecast;
