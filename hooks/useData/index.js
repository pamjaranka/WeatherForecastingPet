import React, {useEffect, useReducer} from 'react';
import useGeolocation from '../useGeolocation';
import useOpenweathermapApi from '../useOpenweathermapApi';
import reducer from './reducer';
import {fetchSetOptions} from '../useOpenweathermapApi/actionCreators';
import {setCityFail, setDataFail, setDataStart, setDataSuccess} from './actionCreators';
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
    // isLoaded: false,
    isCityError: false,
    isError: false,
    data: null,
    forecast: null,
    city: null,
  });
  // console.log('useData');

  const setCoorsOptions = () => {
    dispatchData(fetchSetOptions(stateGeolocation.coors));
  };

  const [stateGeolocation, updateGeolocation] = useGeolocation(setCoorsOptions);
  const [data, dispatchData, changeCity] = useOpenweathermapApi();
  console.log('!!!!!!');
  console.log(data);
  useEffect(() => {
    // console.log('useData WILL CHANGE');
    // console.log(data);
    dispatch(setDataStart());

    if (data && data.dataApi && data.dataApi[0]) {
      const setData = {
        main: data.dataApi[0].weather[0].main,
        description: data.dataApi[0].weather[0].description,
        wind: data.dataApi[0].wind,
        clouds: data.dataApi[0].clouds.all,
        rain: data.dataApi[0].rain,
        snow: data.dataApi[0].snow,
        ...data.dataApi[0].main,
      };
      const forecast = setForecast(setData);
      dispatch(
        setDataSuccess({
          city: data.dataApi[0].name,
          data: setData,
          forecast: forecast,
        }),
      );
    } else if (data.searchCityError) {
      console.log('CITY ERRROR')
      dispatch(setCityFail());
    } else if (stateGeolocation.isError || data.isError) {
      dispatch(setDataFail());
    }
  }, [data.dataApi, data.isError, stateGeolocation.isError]);

  return {state, changeCity, updateGeolocation};
};
