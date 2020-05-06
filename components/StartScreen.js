import React from 'react';
import ContentContainer, {contentPropTypes} from './ContentContainer';
import {Text} from 'native-base';
import useForecast from '../hooks/useForecast';

StartScreen.propTypes = contentPropTypes;

function StartScreen(props) {
  const {city, dataApi, changeCity, updateGeolocation} = props;

  const forecast = useForecast(dataApi);
  console.log('StartScreen');
  console.log(dataApi);
  console.log(forecast);

  return (
    <>
      {!forecast.isLoaded ? (
        <Text>Wait...</Text>
      ) : (
        <ContentContainer
          city={city}
          changeCity={changeCity}
          dataApi={dataApi}
          forecast={forecast}
          updateGeolocation={updateGeolocation}
        />
      )}
    </>
  );
}

export default StartScreen;
