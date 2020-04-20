import React from 'react';
import {Text, View} from 'react-native';
import Loading from './Loading';
import LocationData from './LocationData';
import LocationSearch from './LocationSearch';
import useGeolocation from '../hooks/useGeolocation';
import useDataApi from '../hooks/useDataApi';
import useTimeoutWait from '../hooks/useTimeoutWait';
import {
  UPDATE,
  FETCH,
  SET_OPTIONS,
  GEOLOCATION,
} from '../constants';

function Location() {
  console.log('Location!?');
  const wait = useTimeoutWait({delay: 3000});
  console.log(`wait ${wait}`);
  const setCoorsOptions = () => {
    console.log('setCoorsOptions');
    console.log(stateGeolocation);
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
  console.log('end location stateGeolocation');
  console.log(stateGeolocation);
  return (
    <View>
      {wait || stateGeolocation.isLoading || stateData.isLoading || !stateData.city ? (
        <Loading />
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
