/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useRef, useState, useEffect} from 'react';
import {HOME_SCREEN, SEARCH_MODAL} from './constants/screens';
import HeaderContainer from './components/HeaderContainer';
import Navigation from './screens/Navigation';
import {Container, Text} from 'native-base';
import useData from './hooks/useData';
import CloseButton from './components/CloseButton';
import SearchButton from './components/SearchButton';
import RefreshButton from './components/RefreshButton';
import useTimeoutWait from './hooks/useTimeoutWait';
import Loading from './components/Loading';

function App() {
  console.log('APP');
  const ref = useRef(null);
  const {state, changeCity, updateGeolocation} = useData();
  const [modalVisible, setModalVisible] = useState(false);
  const wait = useTimeoutWait({delay: 3000});
  const {
    isError,
    // isLoaded,
    isLoading,
    isCityError,
    data,
    city,
    forecast,
  } = state;

  console.log('APP state');
  console.log(state);
  const sendState = ({index, routeNames}) => {
    setModalVisible(routeNames[index] === SEARCH_MODAL);
  };

  const onRefreshButtonPress = () => {
    updateGeolocation();
    ref.current &&
      ref.current.navigate(HOME_SCREEN, {
        isLoading: true,
      });
  };

  const headerButtonFirst = <RefreshButton onPress={onRefreshButtonPress} />;
  const headerButtonSecond = modalVisible ? (
    <CloseButton
      onPress={() => ref.current && ref.current.navigate(HOME_SCREEN)}
    />
  ) : (
    <SearchButton
      onPress={() => ref.current && ref.current.navigate(SEARCH_MODAL)}
    />
  );

  const onSearchFormSubmit = query => {
    changeCity(query);
    ref.current &&
      ref.current.navigate(HOME_SCREEN, {
        isLoading: true,
      });
  };

  const updateHome = () => {
    if(ref && ref.current) {
      const rootState = ref.current.getRootState();
      const {index, routeNames} = rootState;

      if (routeNames[index] === HOME_SCREEN) {
        ref.current && ref.current.setParams({...state});
      }
    }

  };

  useEffect(() => {
    console.log(`CITY CHANGE 77 ${city}`);
    updateHome();
  }, [city]);

  return (
    <Container>
      <HeaderContainer
        headerButtonFirst={headerButtonFirst}
        headerButtonSecond={headerButtonSecond} />
      {wait || isLoading ? (
        <Loading />
      ) : isError ? (
        <Text>Something went wrong...</Text>
      ) : (
        <Navigation
          refObj={ref}
          onStateChange={sendState}
          useDataState={state}
          onSearchFormSubmit={onSearchFormSubmit}
        />
      )}
    </Container>
  );
}

export default App;
