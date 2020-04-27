import React from 'react';
import {Text, Image, StyleSheet} from 'react-native';
import usePet, {usePetPropTypes} from '../hooks/usePet';
import {IMAGE_SOURCE} from '../constants/imageSource';

ForecastPetImage.propTypes = usePetPropTypes;

function ForecastPetImage(props) {
  const pet = usePet(props);

  console.log(pet);
  console.log(IMAGE_SOURCE);
  console.log(IMAGE_SOURCE[pet]);

  return (
    <>
      {pet ?
        <Image
          style={styles.image}
          source={IMAGE_SOURCE[pet]}
        /> : <Text>111</Text>}
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
