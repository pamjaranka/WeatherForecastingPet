import React from 'react';
import {
  HOME_SCREEN,
  SEARCH_MODAL,
  LOADING_SCREEN,
  ERROR_CITY_SCREEN,
  ERROR_SCREEN,
} from '../constants/screens';
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import LoadingScreen from './LoadingScreen';
import ErrorScreen from './ErrorScreen';
import ErrorCityScreen from './ErrorCityScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {forecastPropTypes} from '../components/ContentContainer';
import {forecastDataPropTypes} from '../components/ForecastData';
import PropTypes from 'prop-types';

Navigation.propTypes = {
  refObj: PropTypes.object.isRequired,
  onStateChange: PropTypes.func.isRequired,
  onSearchFormSubmit: PropTypes.func.isRequired,
  refreshButton: PropTypes.element.isRequired,
  searchButton: PropTypes.element.isRequired,
  initialRouteName: PropTypes.oneOf([
    HOME_SCREEN,
    SEARCH_MODAL,
    LOADING_SCREEN,
    ERROR_SCREEN,
  ]).isRequired,
  useDataState: PropTypes.shape({
    isError: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    isCityError: PropTypes.bool.isRequired,
    data: PropTypes.shape(forecastDataPropTypes),
    city: PropTypes.string,
    forecast: PropTypes.shape(forecastPropTypes),
  }),
};

const Stack = createStackNavigator();

function Navigation(props) {
  const {
    refObj,
    onStateChange,
    onSearchFormSubmit,
    initialRouteName,
    useDataState,
    refreshButton,
    searchButton,
  } = props;

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
        />
        <Stack.Screen
          name={ERROR_CITY_SCREEN}
          component={ErrorCityScreen}
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
