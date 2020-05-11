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
import CloseButton from './CloseButton';
import RefreshButton from './RefreshButton';
import SearchButton from './SearchButton';

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
  const closeButton = <CloseButton onPress={hideForm} />;
  const refreshButton = <RefreshButton onPress={updateGeolocation} />;
  const searchButton = <SearchButton onPress={showForm} />;
  return (
    <Container>
      <HeaderContainer
        refreshButton={refreshButton}
        searchButton={showLocationSearchForm ? closeButton : searchButton}
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
