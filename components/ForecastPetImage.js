import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {IMAGE_SOURCE} from '../constants/imageSource';
import PropTypes from 'prop-types';

ForecastPetImage.propTypes = {
  pet: PropTypes.string.isRequired,
};

function ForecastPetImage(props) {
  const {pet} = props;
  console.log('ForecastPetImage ?');
  console.log(pet);

  return (
    <>
      {pet && IMAGE_SOURCE[pet] ? (
        <Image
          style={styles.image}
          source={IMAGE_SOURCE[pet]}
        />
      ) : (
        <></>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 340,
    height: 400,
  },
});

export default ForecastPetImage;
