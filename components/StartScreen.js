import React from 'react';
import HeaderContainer from './HeaderContainer';
import FooterContainer from './FooterContainer';
import ContentContainer, {contentPropTypes} from './ContentContainer';
import {Container, Content, Text} from 'native-base';
import useData from '../hooks/useData';
import useTimeoutWait from '../hooks/useTimeoutWait';
import {ScrollView} from 'react-native';
import Loading from './Loading';
import useForecastData from '../hooks/useForecastData';
import PropTypes from 'prop-types';

StartScreen.propTypes = contentPropTypes;

function StartScreen(props) {
  const {
    city,
    data,
    changeCity,
    updateGeolocation
  } = props;

  // const forecastData = useForecastData(dataToSend);
  console.log('!!!!!!!!');
  console.log(data);
  // console.log(forecastData);
  // console.log(dataToSend);

  return (
    <ContentContainer
      city={city}
      changeCity={changeCity}
      data={data}
      updateGeolocation={updateGeolocation}
    />
  );
}

export default StartScreen;
