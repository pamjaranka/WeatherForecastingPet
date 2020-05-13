import React, {useState, useEffect} from 'react';
import {
  HOME_SCREEN,
  SEARCH_MODAL,
  LOADING_SCREEN,
  ERROR_SCREEN,
} from '../constants/screens';
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import LoadingScreen from './LoadingScreen';
import ErrorScreen from './ErrorScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {forecastPropTypes} from '../components/ContentContainer';
import {forecastDataPropTypes} from '../components/ForecastData';
import {navigateTo, setParamsTo} from '../utils/navigate';
import PropTypes from 'prop-types';

Navigation.propTypes = {
  refObj: PropTypes.object.isRequired,
  onStateChange: PropTypes.func.isRequired,
  changeCity: PropTypes.func.isRequired,
  refreshButton: PropTypes.element.isRequired,
  searchButton: PropTypes.element.isRequired,
  initialRouteName: PropTypes.oneOf([
    HOME_SCREEN,
    SEARCH_MODAL,
    LOADING_SCREEN,
    ERROR_SCREEN,
  ]).isRequired,
  useDataState: PropTypes.shape({
    isError: PropTypes.bool,
    isLoading: PropTypes.bool,
    isLoaded: PropTypes.bool,
    isCityError: PropTypes.bool,
    data: PropTypes.shape(forecastDataPropTypes),
    city: PropTypes.string,
    forecast: PropTypes.shape(forecastPropTypes),
  }),
};

const Stack = createStackNavigator();

function Navigation(props) {
  console.log('Navigation');
  const {
    refObj,
    onStateChange,
    changeCity,
    initialRouteName,
    useDataState,
    refreshButton,
    searchButton,
  } = props;

  console.log(initialRouteName);

  const onSearchFormSubmit = query => {
    setSearchFormLoading(true);
    changeCity(query);
  };

  const setSearchFormLoading = isLoading => {
    setParamsTo(refObj, {
      isCityLoading: isLoading,
    });
  };

  const setSearchFormError = isError => {
    setParamsTo(refObj, {
      isCityError: isError,
    });
  };

  const goHome = () => {
    navigateTo(refObj, HOME_SCREEN, {...useDataState});
  };

  useEffect(() => {
    console.log(`CITY CHANGE ${useDataState.city}`);
    console.log(useDataState);
    setSearchFormLoading(false);
    if (useDataState.city && !useDataState.isCityError) {
      setSearchFormError(false);
      goHome();
    } else if (useDataState.isCityError) {
      setSearchFormError(true);
    }
  }, [useDataState.city, useDataState.isCityError]);

  return (
    <NavigationContainer
      ref={refObj}
      onStateChange={state => onStateChange(state)}>
      <Stack.Navigator initialRouteName={initialRouteName}>
        <Stack.Screen
          name={HOME_SCREEN}
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
          initialParams={useDataState}
        />
        <Stack.Screen
          name={SEARCH_MODAL}
          component={SearchScreen}
          options={{
            headerShown: false,
          }}
          initialParams={{
            isCityLoading: false,
            isCityError: useDataState.isCityError,
            onSearchFormSubmit: onSearchFormSubmit,
          }}
        />
        <Stack.Screen
          name={LOADING_SCREEN}
          component={LoadingScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={ERROR_SCREEN}
          component={ErrorScreen}
          options={{
            headerShown: false,
          }}
          initialParams={{
            refreshButton: refreshButton,
            searchButton: searchButton,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
