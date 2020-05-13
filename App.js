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
} from './constants/screens';
import HeaderContainer from './components/HeaderContainer';
import Navigation from './screens/Navigation';
import {Container} from 'native-base';
import useData from './hooks/useData';
import CloseButton from './components/CloseButton';
import SearchButton from './components/SearchButton';
import RefreshButton from './components/RefreshButton';
import useTimeoutWait from './hooks/useTimeoutWait';
import Loading from './components/Loading';
import {navigateTo} from './utils/navigate';

function App() {
  console.log('APP');
  const ref = useRef(null);
  const {state, changeCity, updateGeolocation} = useData();
  const [searchScreenFocused, setSearchScreenFocused] = useState(false);
  const wait = useTimeoutWait({delay: 3000});
  const {
    isError,
    isLoaded,
    isLoading,
    isFirstLoaded,
    isCityError,
    data,
    city,
    forecast,
  } = state;

  console.log('APP state');
  console.log(`searchScreenFocused ${searchScreenFocused}`);
  console.log(state);
  const sendState = ({index, routeNames}) => {
    setSearchScreenFocused(routeNames[index] === SEARCH_MODAL);
  };

  const onRefreshButtonPress = () => {
    updateGeolocation();
    navigateTo(ref, HOME_SCREEN, {
      isLoading: true,
    });
    // ref.current &&
    //   ref.current.navigate(HOME_SCREEN, {
    //     isLoading: true,
    //   });
  };

  const onCloseButtonPress = () => {
    isError || isCityError
      ? navigateTo(ref, ERROR_SCREEN)
      : navigateTo(ref, HOME_SCREEN);
  };

  const closeButton = <CloseButton onPress={onCloseButtonPress} />;
  const refreshButton = <RefreshButton onPress={onRefreshButtonPress} />;
  const searchButton = <SearchButton onPress={() => navigateTo(ref, SEARCH_MODAL)}/>;
  const headerButtonSecond = searchScreenFocused ? closeButton : searchButton;

  // const getRouteName = () => {
  //   return searchScreenFocused
  //     ? SEARCH_MODAL
  //     : HOME_SCREEN;
  // };

  return (
    <Container>
      {!isFirstLoaded || wait ? (
        <Loading />
      ) : (
        <>
          <HeaderContainer
            headerButtonFirst={refreshButton}
            headerButtonSecond={headerButtonSecond} />
          <Navigation
            refObj={ref}
            onStateChange={sendState}
            // initialRouteName={getRouteName()}
            initialRouteName={HOME_SCREEN}
            useDataState={state}
            changeCity={changeCity}
            refreshButton={refreshButton}
            searchButton={searchButton}
            // onSearchFormSubmit={onSearchFormSubmit}
          />
        </>
      )}
    </Container>
  );
}

export default App;
