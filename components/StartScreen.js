import React from 'react';
import ContentContainer from './ContentContainer';
import {Container, Content, Text} from 'native-base';
import HeaderContainer from './HeaderContainer';
import Loading from './Loading';
import {ScrollView} from 'react-native';
import FooterContainer from './FooterContainer';
import useTimeoutWait from '../hooks/useTimeoutWait';
import useData from '../hooks/useData';
import useWeatherPhrases from '../hooks/useWeatherPhrases';


function StartScreen() {
  const wait = useTimeoutWait({delay: 3000});
  const {state, changeCity, updateGeolocation} = useData();

  const {
    isError,
    isLoaded,
    isLoading,
    data,
    city,
    forecast,
  } = state;

  console.log('StartScreen');
  const weatherPhrase = useWeatherPhrases('Good boy!', forecast);
  // console.log('weatherPhrase');
  // console.log(weatherPhrase);

  return (
    <Container>
      <HeaderContainer />
      <Content>
        {wait || !isLoaded || isLoading ? (
          <Loading />
        ) : isError ? (
          <Text>Something went wrong...</Text>
        ) : (
          <ScrollView>
            <ContentContainer
              city={city}
              changeCity={changeCity}
              data={data}
              forecast={forecast}
              updateGeolocation={updateGeolocation}
            />
          </ScrollView>
        )}
      </Content>
      <FooterContainer phrase={weatherPhrase} />
    </Container>
  );
}

export default StartScreen;
