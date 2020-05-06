import {useEffect, useReducer} from 'react';
import dataFetchReducer from '../reducer/data';
import {FAIL, FETCH, SET_OPTIONS, START, SUCCESS} from '../constants';
import axios from 'axios';

export default () => {
  const [data, dispatchData] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    options: null,
    data: null,
    city: null,
  });

  const changeCity = city => {
    dispatchData({type: `${FETCH}${SET_OPTIONS}`, payload: {q: city}});
  };

  // console.log('useDataApi (data)');
  //console.log(data);

  let url = 'https://api.openweathermap.org/data/2.5/find?';
  // let url = 'https://api.openweathermap.org/data/2.5/onecall?';
  let apiOption = {
    cnt: 10,
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

  //console.log(url);

  useEffect(() => {
    let didCancel = false;
    console.log(`did cancel ${didCancel}`);
    if (data.options) {
      dispatchData({type: `${FETCH}${START}`});
      const fetchData = async () => {
        try {
          const result = await axios(url);
          // console.log('try!');
          // console.log(result.data);
          if (result && result.data) {
            dispatchData({
              type: `${FETCH}${SUCCESS}`,
              payload: result.data.list,
            });
          }
        } catch (e) {
          console.log(e.message);
          dispatchData({type: `${FETCH}${FAIL}`});
        }
      };
      fetchData();
    }
    return () => {
      didCancel = true;
    };
  }, [data.options, url]);

  return [data, dispatchData, changeCity];
};
