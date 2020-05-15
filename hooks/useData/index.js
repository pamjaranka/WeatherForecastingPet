import React, {useEffect, useReducer} from 'react';
import useGeolocation from '../useGeolocation';
import useOpenweathermapApi from '../useOpenweathermapApi';
import reducer from './reducer';
import {fetchSetOptions} from '../useOpenweathermapApi/actionCreators';
import {
  setCityFail,
  setDataFail,
  setDataStart,
  setDataSuccess,
} from './actionCreators';
import {
  TEMP_COLD,
  TEMP_FROSTY,
  TEMP_HOT,
  TEMP_MILD,
  TEMP_WARM,
  TEMP_MEAUSURE_HOT,
  TEMP_MEAUSURE_COLD,
  TEMP_MEAUSURE_MILD,
  TEMP_MEAUSURE_WARM,
  CLOUDS_MEASURE,
  WIND_MEASURE,
} from '../../constants/forecast';

const setForecast = data => {
  const {feels_like, main, description, clouds, rain, snow, wind} = data;

  const checkTemp = () => {
    if (feels_like >= TEMP_MEAUSURE_HOT) {
      return TEMP_HOT;
    } else if (
      feels_like >= TEMP_MEAUSURE_WARM &&
      feels_like < TEMP_MEAUSURE_HOT
    ) {
      return TEMP_WARM;
    } else if (
      feels_like >= TEMP_MEAUSURE_MILD &&
      feels_like < TEMP_MEAUSURE_WARM
    ) {
      return TEMP_MILD;
    } else if (
      feels_like >= TEMP_MEAUSURE_COLD &&
      feels_like < TEMP_MEAUSURE_MILD
    ) {
      return TEMP_COLD;
    } else if (feels_like < TEMP_MEAUSURE_COLD) {
      return TEMP_FROSTY;
    }
  };
  const checkWord = word => {
    return main.indexOf(word) >= 0 || description.indexOf(word) >= 0;
  };

  const forecast = {
    temp: checkTemp(),
    isSunny: clouds < CLOUDS_MEASURE,
    isClouds: clouds >= CLOUDS_MEASURE,
    isRain: rain !== null || checkWord('rain'),
    isSnow: snow !== null || checkWord('snow'),
    isWind: wind.speed && wind.speed > WIND_MEASURE,
  };

  return forecast;
};

export default () => {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: false,
    isCityError: false,
    isError: false,
    currentData: null,
    forecastData: null,
    forecast: null,
    city: null,
  });
  console.log('useData');
  console.log(state);

  const setCoorsOptions = () => {
    dispatchData(fetchSetOptions(stateGeolocation.coors));
  };

  const [stateGeolocation, updateGeolocation] = useGeolocation(setCoorsOptions);
  const [data, dispatchData, changeCity] = useOpenweathermapApi();

  const getData = d => {
    return {
      main: d[0].weather[0].main,
      description: d[0].weather[0].description,
      wind: d[0].wind,
      clouds: d[0].clouds.all,
      rain: d[0].rain,
      snow: d[0].snow,
      ...d[0].main,
    };
  };

  // console.log('!!!!!!');
  // console.log(data);
  // console.log(stateGeolocation);
  useEffect(() => {
    console.log('useData WILL CHANGE');
    console.log(data);
    dispatch(setDataStart());

    if (data && data.currentData && data.currentData[0]) {
      const currentData = getData(data.currentData);
      const forecast = setForecast(currentData);
      dispatch(
        setDataSuccess({
          city: data.currentData[0].name,
          currentData: currentData,
          forecastData: data.forecastData,
          forecast: forecast,
        }),
      );
    } else if (data.searchCityError) {
      dispatch(setCityFail());
    } else if (stateGeolocation.isError || data.isError) {
      dispatch(setDataFail());
    }
  }, [data.currentData, data.isError, stateGeolocation.isError]);

  return {state, changeCity, updateGeolocation};
};
