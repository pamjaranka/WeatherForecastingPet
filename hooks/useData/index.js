import React, {useEffect, useReducer} from 'react';
import useGeolocation from '../useGeolocation';
import useOpenweathermapApi from '../useOpenweathermapApi';
import reducer from './reducer';
import {fetchSetOptions} from '../useOpenweathermapApi/actionCreators';
import {
  setDataFail,
  setDataStart,
  setDataSuccess,
} from './actionCreators';
import {
  TEMP_COLD,
  TEMP_FROSTY,
  TEMP_HOT,
  TEMP_MILD,
  TEMP_WARM
} from '../../constants/forecast';

const setForecast = data => {
  const {
    feels_like,
    main,
    description,
    clouds,
    rain,
    snow,
  } = data;

  const checkTemp = () => {
    if (feels_like >= 28) {
      return TEMP_HOT;
    } else if (feels_like >= 22 && feels_like < 28) {
      return TEMP_WARM;
    } else if (feels_like >= 12 && feels_like < 22) {
      return TEMP_MILD;
    } else if (feels_like >= -12 && feels_like < 12) {
      return TEMP_COLD;
    } else if (feels_like < -12) {
      return TEMP_FROSTY;
    }
  }
  const checkWord = (word) => {
    return main.indexOf(word) >= 0 || description.indexOf(word) >= 0;
  };

  const forecast = {
    temp: checkTemp(),
    isSunny: clouds < 18,
    isRain: rain !== null || checkWord('rain'),
    isSnow: snow !== null || checkWord('snow'),
  };

  return forecast;
};

export default () => {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: false,
    isLoaded: false,
    isError: false,
    data: null,
    forecast: null,
    city: null,
  });
  console.log('useData');

  const setCoorsOptions = () => {
    dispatchData(fetchSetOptions(stateGeolocation.coors));
  };

  const [stateGeolocation, updateGeolocation] = useGeolocation(
    setCoorsOptions,
  );
  const [data, dispatchData, changeCity] = useOpenweathermapApi();

  useEffect(() => {
    console.log('CHANGED!!');
    console.log(data);
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
    } else if (stateGeolocation.isError || data.isError) {
      dispatch(setDataFail());
    }

  }, [data.dataApi]);

 return {state, changeCity, updateGeolocation};
};
