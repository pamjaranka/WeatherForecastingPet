import {useEffect, useReducer} from 'react';
import dataFetchReducer from '../reducer/data';
import {FAIL, FETCH, START, SUCCESS} from '../constants';
import axios from 'axios';

export default () => {
  const [stateData, dispatchData] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    options: null,
    data: null,
    city: null,
  });

  // console.log('useDataApi (stateData)');
  //console.log(stateData);

  let url = 'https://api.openweathermap.org/data/2.5/find?';
  // let url = 'https://api.openweathermap.org/data/2.5/onecall?';
  let apiOption = {
    cnt: 10,
    units: 'metric',
    appid: 'c85e37b1b752a38ed49c404c510ed21a',
    ...stateData.options,
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
    if (stateData.options) {
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
  }, [stateData.options, url]);

  return [stateData, dispatchData];
};
