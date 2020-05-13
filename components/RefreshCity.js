import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'native-base';
import {FONTS, PADDING} from '../styles/base';
import PropTypes from 'prop-types';

RefreshCity.propTypes = {
  refreshButton: PropTypes.element.isRequired,
  searchButton: PropTypes.element.isRequired,
};

function RefreshCity(props) {
  const {refreshButton, searchButton} = props;
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Please update your city data</Text>
        {refreshButton}
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>or search some city</Text>
        {searchButton}
        <Text>.</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontFamily: FONTS.primary,
    fontSize: FONTS.md,
    marginRight: PADDING.sm,
  },
});

export default RefreshCity;
