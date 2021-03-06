import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {FONTS, PADDING, COLORS, HOME_CONTAINER_STYLES} from '../styles/base';
import {DAY_NAMES, MONTH_NAMES} from '../constants/forecast';

LocationData.propTypes = {
  locationCity: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
};

function LocationData(props) {
  const {locationCity, date} = props;
  // console.log('LocationData');
  const dateObj = new Date(date * 1000);
  // console.log(date);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{locationCity}</Text>
      <Text style={styles.subtitle}>(the city)</Text>
      <Text style={styles.date}>{DAY_NAMES[dateObj.getDay()]}, {MONTH_NAMES[dateObj.getMonth()]} {dateObj.getDate()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: HOME_CONTAINER_STYLES,
  titleContainer: {
    borderBottomColor: COLORS.grey,
    borderBottomWidth: 4,
  },
  title: {
    fontFamily: FONTS.serifBold,
    fontSize: FONTS.xxl,
  },
  subtitle: {
    color: COLORS.grey,
    fontSize: FONTS.sm,
  },
  date: {
    fontFamily: FONTS.italic,
    fontSize: FONTS.md,
    marginTop: PADDING.sm,
  },
});

export default LocationData;
