import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import LocationData from './LocationData';
import LocationSearch from './LocationSearch';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';

const useGeolocation = callbackForCoors => {
  const [loadingGeolocation, setLoadingGeolocation] = useState(false);
  const [errorGeolocation, setErrorGeolocation] = useState('');
  const [updateGeolocation, setUpdateGeolocation] = useState(true);
  const [locationCoors, setLocationCoors] = useState(null);

  console.log('useGeolocation');

  useEffect(() => {
    console.log('useGeolocation useEffect');
    let watchId = null;
    async function fetchGeolocation() {
      setLoadingGeolocation(true);

      console.log('fetchGeolocation');
      watchId = await Geolocation.watchPosition(
        pos => {
          setErrorGeolocation('');
          setLocationCoors({
            lat: pos.coords.latitude,
            lon: pos.coords.longitude,
          });
          callbackForCoors({
            lat: pos.coords.latitude,
            lon: pos.coords.longitude,
          });
          setLoadingGeolocation(false);
        },
        e => {
          console.log(e);
          setErrorGeolocation(e.message);
        },
        {maximumAge: 0},
      );
    }
    fetchGeolocation().then(setUpdateGeolocation(false));
    return () => Geolocation.clearWatch(watchId);
  }, [updateGeolocation]);

  return [{errorGeolocation, loadingGeolocation, locationCoors}, setUpdateGeolocation];
};

const useDataApi = options => {
  const [loadingData, setLoadingData] = useState(false);
  const [errorData, setErrorData] = useState(false);
  const [data, setData] = useState(null);
  const [locationCity, setLocationCity] = useState(null);

  console.log('useDataApi');
  console.log(options);
  console.log(locationCity);

  let url = 'https://api.openweathermap.org/data/2.5/find?';
  let apiOption = {
    cnt: 10,
    units: 'metric',
    appid: 'c85e37b1b752a38ed49c404c510ed21a',
    ...options,
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
    const fetchData = async () => {
      //setErrorData(false);
      setLoadingData(true);
      try {
        const result = await axios(url);
        console.log('try');
        if (result && result.data) {
          setErrorData(false);
          setLocationCity(result.data.list[0].name);
          setData(result.data.list);
        }
      } catch (e) {
        console.log(e.message);
        setErrorData(e.message);
      }

      setLoadingData(false);
    };
    fetchData();

    return () => {
      didCancel = true;
    };
  }, [url]);

  return [{errorData, loadingData, locationCity, data}, setLocationCity];
};

function Location(props) {
  // function callback(options) {
  //   setOptions(options);
  // }
  const [options, setOptions] = useState(null);
  const [
    {errorGeolocation, loadingGeolocation, locationCoors},
    setUpdateGeolocation,
  ] = useGeolocation(setOptions);
  console.log('Location!');
  console.log(options);

  const [
    {errorData, loadingData, locationCity, data},
    setLocationCity,
  ] = useDataApi(options);

  console.log(`locationCity ${locationCity}`);
  console.log(`loadingGeolocation ${loadingGeolocation}`);
  console.log(`locationCoors ${locationCoors}`);
  // console.log(errorGeolocation);
  // console.log(errorData);
  console.log(data);
  return (
    <View>
      {loadingGeolocation || loadingData || !locationCity ? (
        <Text>Is loading...</Text>
      ) : errorGeolocation || errorData ? (
        <Text>Something went wrong...</Text>
      ) : (
        <>
          <LocationData locationCity={locationCity} onUpdate={setUpdateGeolocation}/>
          <LocationSearch locationCity={locationCity} setOptions={setOptions} />
        </>
      )}
    </View>
  );
}

export default Location;
