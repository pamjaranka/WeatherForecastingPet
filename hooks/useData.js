import {FETCH, SET_OPTIONS} from '../constants';
import useGeolocation from './useGeolocation';
import useOpenweathermapApi from './useOpenweathermapApi';

export default () => {
  // console.log('useData');

  const setCoorsOptions = () => {
    dispatchData({
      type: `${FETCH}${SET_OPTIONS}`,
      payload: stateGeolocation.coors,
    });
  };

  const [stateGeolocation, updateGeolocation] = useGeolocation(setCoorsOptions);
  const [data, dispatchData, changeCity] = useOpenweathermapApi();
  let isError = stateGeolocation.isError || data.isError;
  let isLoading = stateGeolocation.isLoading || data.isLoading || !data.city;
  let city = data.city;

  const dataToSend =
    data && data.data && data.data[0]
      ? {
          main: data.data[0].weather[0].main,
          description: data.data[0].weather[0].description,
          wind: data.data[0].wind,
          clouds: data.data[0].clouds.all,
          rain: data.data[0].rain,
          snow: data.data[0].snow,
          ...data.data[0].main,
        }
      : null;

  return [isError, isLoading, dataToSend, city, changeCity, updateGeolocation];
};
