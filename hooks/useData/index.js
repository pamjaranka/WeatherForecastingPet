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
  setCityNew,
} from './actionCreators';
import {getForecast} from '../../utils/forecast';

export default () => {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: false,
    isCityError: false,
    isError: false,
    forecastData: null,
    city: null,
  });
  console.log('useData');
  console.log(state);

  const setCoorsOptions = () => {
    dispatchData(
      fetchSetOptions({
        lat: stateGeolocation.lat,
        lon: stateGeolocation.lon,
      }),
    );
  };

  const update = () => {
    updateGeolocation();
    dispatch(setCityNew());
  };

  const [stateGeolocation, updateGeolocation] = useGeolocation(setCoorsOptions);
  const [data, dispatchData, changeCity] = useOpenweathermapApi();

  const getData = d => {
    const dataFormatted = {
      dt: d.dt,
      main: d.weather[0].main,
      description: d.weather[0].description,
      wind: d.wind,
      clouds: d.clouds.all,
      rain: d.rain || null,
      snow: d.snow || null,
      ...d.main,
    };

    return {
      ...dataFormatted,
      params: getForecast(dataFormatted),
    };
  };

  const getForecastData = (currentData, forecastData) => {
    console.log('getForecastData');

    let result = [];
    result[0] = currentData;

    forecastData.forEach((value, index) => {
      result[index + 1] = getData(value);
    });

    return result;
  };

  // console.log('!!!!!!');
  // console.log(data);
  // console.log(stateGeolocation);
  useEffect(() => {
    console.log('useData WILL CHANGE');
    console.log(data);
    dispatch(setDataStart());

    if (data && data.currentData && data.currentData[0] && data.forecastData) {
      const currentData = getData(data.currentData[0]);
      const forecastData = getForecastData(currentData, data.forecastData);

      dispatch(
        setDataSuccess({
          city: data.currentData[0].name,
          forecastData: forecastData,
        }),
      );
    } else if (data.searchCityError) {
      dispatch(setCityFail());
    } else if (stateGeolocation.isError || data.isError) {
      dispatch(setDataFail());
    }
  }, [data.currentData, data.isCurrentError, data.forecastData, data.isForecastError, stateGeolocation.isError]);

  return {state, changeCity, update};
};
