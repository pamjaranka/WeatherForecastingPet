import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';

Forecast.propTypes = {
  temp: PropTypes.number.isRequired,
  temp_max: PropTypes.number.isRequired,
  temp_min: PropTypes.number.isRequired,
  feels_like: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  pressure: PropTypes.number.isRequired,
  main: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  wind: PropTypes.object.isRequired,
  clouds: PropTypes.number.isRequired,
};

function Forecast(props) {
  const {
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
  } = props;

  console.log(props);
  return (
    <View>
      <Text>Temperature: {temp} C.</Text>
      <Text>Temperature maximum: {temp_max} C.</Text>
      <Text>Temperature minimum: {temp_min} C.</Text>
      <Text>Feels like: {feels_like} C.</Text>
      <Text>Main: {main}.</Text>
      <Text>Description: {description}.</Text>
      <Text>Humidity: {humidity} %.</Text>
      <Text>Pressure: {pressure} hpa.</Text>
      <Text>Wind speed: {wind.speed} meter/sec.</Text>
      <Text>Wind deg: {wind.deg}.</Text>
      <Text>Clouds: {clouds} %.</Text>
    </View>
  );
}

export default Forecast;
