import React from 'react';
import HeaderContainer from './HeaderContainer';
import FooterContainer from './FooterContainer';
import ContentContainer from './ContentContainer';
import {Container, Content, Text} from 'native-base';
import useData from '../hooks/useData';
import useTimeoutWait from '../hooks/useTimeoutWait';
import {ScrollView} from 'react-native';
import Loading from './Loading';

function StartScreen(props) {
  const wait = useTimeoutWait({delay: 3000});
  const [
    isError,
    isLoading,
    dataToSend,
    city,
    changeCity,
    updateGeolocation,
  ] = useData();
  console.log(dataToSend);

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
            <ContentContainer
              city={city}
              changeCity={changeCity}
              data={dataToSend}
              updateGeolocation={updateGeolocation}
            />
          </ScrollView>
        )}
      </Content>
      <FooterContainer />
    </Container>
  );
}

export default StartScreen;
