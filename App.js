/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import StartScreen from './components/StartScreen';
import useTimeoutWait from './hooks/useTimeoutWait';
import useData from './hooks/useData';
import {Container, Content, Text} from 'native-base';
import HeaderContainer from './components/HeaderContainer';
import Loading from './components/Loading';
import FooterContainer from './components/FooterContainer';
import {ScrollView} from 'react-native';

const App: () => React$Node = () => {
  const wait = useTimeoutWait({delay: 3000});
  const {
    isError,
    isLoading,
    dataApi,
    city,
    changeCity,
    updateGeolocation,
  } = useData();

  return (
    <Container>
      <HeaderContainer />
      <Content>
        {wait || isLoading ? (
          <Loading />
        ) : isError ? (
          <Text>Something went wrong...</Text>
        ) : (
          <ScrollView>
            <StartScreen
              dataApi={dataApi}
              city={city}
              changeCity={changeCity}
              updateGeolocation={updateGeolocation}
            />
          </ScrollView>
        )}
      </Content>
      <FooterContainer dataApi={dataApi} />
    </Container>
  );
};

export default App;
