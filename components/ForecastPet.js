import React from 'react';
import {View, StyleSheet} from 'react-native';
import ForecastPetImage from './ForecastPetImage';
import {COLORS} from '../styles/base';
import PropTypes from 'prop-types';
import usePet from '../hooks/usePet';
import {PET_DOG} from '../constants/forecast';
import {forecastPropTypes} from '../utils/forecast';

ForecastPet.propTypes = {
  forecast: PropTypes.shape(forecastPropTypes).isRequired,
};

function ForecastPet(props) {
  const {forecast} = props;

  const pet = usePet({
    forecast: forecast,
    petInit: PET_DOG,
  });

  // console.log('ForecastPet ?');
  // console.log(pet);

  return (
    <View style={styles.container}>
      {pet ? <ForecastPetImage pet={pet} /> : <></>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    alignItems: 'center',
  },
});

export default ForecastPet;
