import React from 'react';
import {Text, View, useWindowDimensions, StyleSheet} from 'react-native';
import ForecastPetImage from './ForecastPetImage';
import {COLORS} from '../styles/base';

function ForecastPet(props) {
  const window = useWindowDimensions();

  return (
    <View style={styles.container}>
      {props.pet ? <ForecastPetImage {...props} /> : <></>}
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
