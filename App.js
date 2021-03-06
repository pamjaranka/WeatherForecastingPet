/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useRef, useState, useEffect} from 'react';
import {
  HOME_SCREEN,
  SEARCH_MODAL,
  LOADING_SCREEN,
  ERROR_SCREEN,
  ERROR_CITY_SCREEN,
} from './constants/screens';
import HeaderContainer from './components/HeaderContainer';
import Navigation from './screens/Navigation';
import {Container} from 'native-base';
import useData from './hooks/useData';
import CloseButton from './components/CloseButton';
import SearchButton from './components/SearchButton';
import RefreshButton from './components/RefreshButton';
import {navigateTo, setParamsTo} from './utils/navigate';
import {COLORS} from './styles/base';
import {StyleSheet} from 'react-native';

function App() {
  console.log('APP');
  const ref = useRef(null);
  const {state, changeCity, update} = useData();
  const [searchScreenFocused, setSearchScreenFocused] = useState(false);
  const {
    isError,
    isCityError,
    city,
  } = state;

  console.log('APP state');
  console.log(state);
  const sendState = ({index, routes}) => {
    setSearchScreenFocused(routes[index].name === SEARCH_MODAL);
  };

  const onRefreshButtonPress = () => {
    update();
    navigateTo(ref, HOME_SCREEN, {
      isLoading: true,
      city: null,
    });
  };

  const onCloseButtonPress = () => {
    isError || isCityError
      ? navigateTo(ref, ERROR_CITY_SCREEN)
      : navigateTo(ref, HOME_SCREEN);
  };

  const closeButton = <CloseButton onPress={onCloseButtonPress} />;
  const refreshButton = <RefreshButton onPress={onRefreshButtonPress} />;
  const searchButton = <SearchButton onPress={() => navigateTo(ref, SEARCH_MODAL)}/>;
  const headerButtonSecond = searchScreenFocused ? closeButton : searchButton;

  const onSearchFormSubmit = query => {
    setSearchFormLoading(true);
    changeCity(query);
  };

  const setSearchFormLoading = loading => {
    setParamsTo(ref, {
      isCityLoading: loading,
    });
  };

  const setSearchFormError = error => {
    setParamsTo(ref, {
      isCityError: error,
    });
  };

  const goHome = () => {
    navigateTo(ref, HOME_SCREEN, {...state});
  };

  const goError = () => {
    navigateTo(ref, ERROR_SCREEN);
  };

  useEffect(() => {
    console.log(`CITY CHANGE ${city}`);
    console.log(state);
    setSearchFormLoading(false);
    if (city && !isCityError) {
      setSearchFormError(false);
      goHome();
    } else if (isCityError) {
      setSearchFormError(true);
    } else if (isError) {
      goError();
    }
  }, [city, isCityError, isError]);

  return (
    <Container style={styles.container}>
      <HeaderContainer
        headerButtonFirst={refreshButton}
        headerButtonSecond={headerButtonSecond} />
      <Navigation
        refObj={ref}
        onStateChange={sendState}
        initialRouteName={LOADING_SCREEN}
        useDataState={state}
        refreshButton={refreshButton}
        searchButton={searchButton}
        onSearchFormSubmit={onSearchFormSubmit}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightGrey,
  },
});

export default App;
