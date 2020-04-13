import React, {useState, useEffect, useReducer} from 'react';
import {Text, View} from 'react-native';
import LocationData from './LocationData';
import LocationSearch from './LocationSearch';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';
import {
  START,
  SUCCESS,
  FAIL,
  UPDATE,
  FETCH,
  SET_OPTIONS,
  GEOLOCATION,
} from '../constants';
import dataFetchReducer from '../reducer/data';
import geolocationReducer from '../reducer/geolocation';

const useGeolocation = callback => {
  const [stateGeolocation, dispatchGeolocation] = useReducer(
    geolocationReducer,
    {
      isLoading: false,
      isError: false,
      coors: null,
      updateGeolocation: false,
    },
  );

  console.log('useGeolocation (stateGeolocation)');
  console.log(stateGeolocation);

  useEffect(() => {
    console.log('useGeolocation useEffect');
    let watchId = null;
    async function fetchGeolocation() {
      dispatchGeolocation({type: `${GEOLOCATION}${START}`});

      console.log('fetchGeolocation');

      watchId = await Geolocation.watchPosition(
        pos => {
          console.log('watch!!');
          dispatchGeolocation({
            type: `${GEOLOCATION}${SUCCESS}`,
            payload: {
              lat: pos.coords.latitude,
              lon: pos.coords.longitude,
            },
          });

          if (typeof callback === 'function') {
            callback();
          }
        },
        e => {
          console.log(e);
          dispatchGeolocation({type: `${GEOLOCATION}${FAIL}`});
        },
        {maximumAge: 0},
      );
    }
    fetchGeolocation();

    return () => Geolocation.clearWatch(watchId);
  }, [stateGeolocation.updateGeolocation]);

  return [stateGeolocation, dispatchGeolocation];
};

const useDataApi = () => {
  const [stateData, dispatchData] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    options: null,
    data: null,
    city: null,
  });

  console.log('useDataApi (stateData)');
  console.log(stateData);

  let url = 'https://api.openweathermap.org/data/2.5/find?';
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

  console.log(url);

  useEffect(() => {
    let didCancel = false;
    console.log(`did cancel ${didCancel}`);
    if (stateData.options) {
      dispatchData({type: `${FETCH}${START}`});
      const fetchData = async () => {
        try {
          const result = await axios(url);
          console.log('try');
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

function Location(props) {
  console.log('Location!');
  const setCoorsOptions = () => {
    dispatchData({
      type: `${FETCH}${SET_OPTIONS}`,
      payload: stateGeolocation.coors,
    });
  };
  const changeCity = city => {
    dispatchData({type: `${FETCH}${SET_OPTIONS}`, payload: {q: city}});
  };
  const updateGeolocation = () => {
    dispatchGeolocation({type: `${GEOLOCATION}${UPDATE}`, payload: true});
  };
  const [stateGeolocation, dispatchGeolocation] = useGeolocation(setCoorsOptions);
  const [stateData, dispatchData] = useDataApi();

  return (
    <View>
      {stateGeolocation.isLoading || stateData.isLoading || !stateData.city ? (
        <Text>Is loading...</Text>
      ) : stateGeolocation.isError || stateData.isError ? (
        <Text>Something went wrong...</Text>
      ) : (
        <>
          <LocationData
            locationCity={stateData.city}
            onUpdate={updateGeolocation}
          />
          <LocationSearch
            locationCity={stateData.city}
            onChange={changeCity} />
        </>
      )}
    </View>
  );
}

export default Location;
