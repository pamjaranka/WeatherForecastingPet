import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';
import {FONTS, COLORS, PADDING, HOME_CONTAINER_STYLES} from '../styles/base';

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
};

ForecastData.propTypes = {
  activeForecastData: PropTypes.shape(forecastDataPropTypes).isRequired,
};

function ForecastData(props) {
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
    },
  } = props;

  return (
    <>
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.superBig}> {temp}˚C</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.infoMainBig}>{feels_like}˚C</Text>
            <Text style={styles.desc}>(feels like)</Text>
          </View>
        </View>
        <View style={styles.containerBottom}>
          <View style={styles.column}>
            <Text style={styles.main}>{main}</Text>
            <Text style={styles.desc}>({description})</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.infoMain}>Minimum</Text>
            <Text style={styles.infoMain}>{temp_min}˚C</Text>
            <Text style={styles.infoMain}>Maximum</Text>
            <Text style={styles.infoMain}>{temp_max}˚C</Text>
          </View>
        </View>
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
    marginTop: PADDING.lg,
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
  additional: {
    ...HOME_CONTAINER_STYLES,
    backgroundColor: COLORS.white,
    // marginTop: PADDING.lg,
  },
  subtitle: {
    fontFamily: FONTS.bold,
    fontSize: 20,
    marginBottom: PADDING.sm,
  },
});

export default ForecastData;
