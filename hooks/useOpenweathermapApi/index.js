import {useEffect, useReducer} from 'react';
import reducer from './reducer';
import {
  fetchCurrentFail,
  fetchCurrentFailCity,
  fetchSetOptions,
  fetchCurrentStart,
  fetchCurrentSuccess,
  fetchForecastFail,
  fetchForecastStart,
  fetchForecastSuccess,
} from './actionCreators';
import axios from 'axios';

export default () => {
  const [data, dispatchData] = useReducer(reducer, {
    isCurrentLoading: false,
    isCurrentError: false,
    searchCityError: false,
    options: null,
    currentData: null,
    isForecastLoading: false,
    isForecastError: false,
    forecastData: null,
  });

  const changeCity = city => {
    dispatchData(fetchSetOptions({q: city}));
  };

  // console.log('useDataApi (data)');
  //console.log(data);

  let currentUrl = 'https://api.openweathermap.org/data/2.5/find?';
  let forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?';

  const addOptionsToUrl = (url, ctn) => {
    let apiOption = {
      cnt: ctn,
      units: 'metric',
      appid: 'c85e37b1b752a38ed49c404c510ed21a',
      ...data.options,
    };

    let flag = 0;
    for (let key in apiOption) {
      flag++;
      url += `${key}=${apiOption[key]}`;
      url += flag < Object.keys(apiOption).length ? '&' : '';
    }

    return url;
  };

  currentUrl = addOptionsToUrl(currentUrl, 10);
  forecastUrl = addOptionsToUrl(forecastUrl, 6);

  useEffect(() => {
    let didCancel = false;
    console.log(`did cancel ${didCancel}`);
    if (data.options) {
      dispatchData(fetchCurrentStart());
      const fetchCurrentData = async () => {
        try {
          const result = await axios(currentUrl);
          // console.log('try!!!');
          // console.log(result);
          if (result && result.data) {
            if (result.data.list.length > 0) {
              dispatchData(fetchCurrentSuccess(result.data.list));
            } else if (result.data.count === 0 && data.options.q) {
              dispatchData(fetchCurrentFailCity());
            } else {
              throw new Error();
            }
          }
        } catch (e) {
          console.log(e.message);
          dispatchData(fetchCurrentFail());
        }
      };

      dispatchData(fetchForecastStart());
      const fetchForecastData = async () => {
        try {
          const result = await axios(forecastUrl);
          console.log('try  2!!!');
          console.log(result);
          if (result && result.data) {
            if (result.data.list.length > 0) {
              dispatchData(fetchForecastSuccess(result.data.list));
            } else {
              throw new Error();
            }
          }
        } catch (e) {
          console.log(e.message);
          dispatchData(fetchForecastFail());
        }
      };

      fetchCurrentData().then(fetchForecastData());
    }
    return () => {
      didCancel = true;
    };
  }, [data.options]);

  return [data, dispatchData, changeCity];
};
