import React, {useState, useEffect} from 'react';
import {HOME_SCREEN, SEARCH_MODAL} from '../constants/screens';
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {forecastPropTypes} from '../components/ContentContainer';
import {forecastDataPropTypes} from '../components/ForecastData';
import PropTypes from 'prop-types';

Navigation.propTypes = {
  refObj: PropTypes.object.isRequired,
  onStateChange: PropTypes.func.isRequired,
  onSearchFormSubmit: PropTypes.func.isRequired,
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
  const {refObj, onStateChange, onSearchFormSubmit, useDataState} = props;

  return (
    <NavigationContainer ref={refObj} onStateChange={(state) => onStateChange(state) }>
      <Stack.Navigator initialRouteName={HOME_SCREEN}>
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
            isCityError: useDataState.isCityError,
            onSearchFormSubmit: onSearchFormSubmit,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
