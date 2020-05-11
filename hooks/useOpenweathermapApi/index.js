import {useEffect, useReducer} from 'react';
import reducer from './reducer';
import {
  fetchFail,
  fetchFailCity,
  fetchSetOptions,
  fetchStart,
  fetchSuccess,
} from './actionCreators';
import axios from 'axios';

export default callback => {
  const [data, dispatchData] = useReducer(reducer, {
    isLoading: false,
    isError: false,
    searchCityError: false,
    options: null,
    dataApi: null,
  });

  const changeCity = city => {
    dispatchData(fetchSetOptions({q: city}));
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

  console.log(url);
  console.log(data.options);

  useEffect(() => {
    let didCancel = false;
    console.log(`did cancel ${didCancel}`);
    if (data.options) {
      dispatchData(fetchStart());
      const fetchData = async () => {
        try {
          const result = await axios(url);
          console.log('try!');
          console.log(result.data);
          if (result && result.data) {
            if (result.data.count > 0) {
              dispatchData(fetchSuccess(result.data.list));

              if (typeof callback === 'function') {
                callback();
              }
            } else if (result.data.count === 0 && data.options.q) {
              dispatchData(fetchFailCity());
            } else {
              throw new Error();
            }
          }
        } catch (e) {
          console.log(e.message);
          dispatchData(fetchFail());
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
