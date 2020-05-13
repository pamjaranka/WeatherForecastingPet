import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import {H1} from 'native-base';
import PropTypes from 'prop-types';
import {FONTS, PADDING, COLORS} from '../styles/base';

LocationData.propTypes = {
  locationCity: PropTypes.string.isRequired,
};

function LocationData(props) {
  const {locationCity} = props;
  console.log('LocationData')

  return (
    <View>
      <Text style={styles.title}>{locationCity}</Text>
      <Text style={styles.subtitle}>(the city)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    borderBottomColor: COLORS.grey,
    borderBottomWidth: 4,
  },
  title: {
    fontFamily: FONTS.serifBold,
    fontSize: FONTS.lg,
  },
  subtitle: {
    color: COLORS.grey,
    fontSize: FONTS.sm,
  },
});

export default LocationData;
