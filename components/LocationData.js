import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {FONTS, PADDING, COLORS, HOME_CONTAINER_STYLES} from '../styles/base';

LocationData.propTypes = {
  locationCity: PropTypes.string.isRequired,
};

function LocationData(props) {
  const {locationCity} = props;
  console.log('LocationData')

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{locationCity}</Text>
      <Text style={styles.subtitle}>(the city)</Text>
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
});

export default LocationData;
