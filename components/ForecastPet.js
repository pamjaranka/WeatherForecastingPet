import React from 'react';
import {Text, View, useWindowDimensions} from 'react-native';
import ForecastPetImage from './ForecastPetImage';

function ForecastPet(props) {
  const window = useWindowDimensions();

  return (
    <View>
      <Text>{`Window Dimensions: height - ${window.height}, width - ${
        window.width
      }`}</Text>
      {props.pet ? <ForecastPetImage {...props} /> : <></>}
    </View>
  );
}

export default ForecastPet;
