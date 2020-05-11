import React, {useState} from 'react';
import ContentContainer from './ContentContainer';
import {Container, Content, Text} from 'native-base';
import HeaderContainer from './HeaderContainer';
import Loading from './Loading';
import {ScrollView, StyleSheet} from 'react-native';
import FooterContainer from './FooterContainer';
import useTimeoutWait from '../hooks/useTimeoutWait';
import useData from '../hooks/useData';
import useWeatherPhrases from '../hooks/useWeatherPhrases';
import {PADDING} from '../styles/base';
import {ICON_CLOSE, ICON_SEARCH} from '../constants/icons';

function StartScreen() {
  const [showLocationSearchForm, setShowLocationSearchForm] = useState(false);
  const wait = useTimeoutWait({delay: 3000});
  const {state, changeCity, updateGeolocation} = useData();

  const showForm = () => {
    setShowLocationSearchForm(true);
  };

  const hideForm = () => {
    setShowLocationSearchForm(false);
  };

  const {
    isError,
    // isLoaded,
    isLoading,
    isCityError,
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
      <HeaderContainer
        onRefreshButtonPress={updateGeolocation}
        onCloseButtonPress={hideForm}
        onSearchButtonPress={showForm}
        showLocationSearchForm={showLocationSearchForm}
      />
      <Content style={styles.container}>
        {wait || isLoading ? (
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
              showLocationSearchForm={showLocationSearchForm}
              isCityError={isCityError}
            />
          </ScrollView>
        )}
      </Content>
      <FooterContainer phrase={weatherPhrase} />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: PADDING.md,
    paddingRight: PADDING.md,
  },
});

export default StartScreen;
