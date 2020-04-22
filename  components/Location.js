import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import Loading from './Loading';
import LocationData from './LocationData';
import LocationSearch from './LocationSearch';
import Forecast from './Forecast';
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

  const setCoorsOptions = () => {
    // console.log('setCoorsOptions');
    // console.log(stateGeolocation);
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
  // console.log('end location stateGeolocation');
  // console.log(stateGeolocation);
  console.log(stateData);
  return (
    <View>
      {wait || stateGeolocation.isLoading || stateData.isLoading || !stateData.city ? (
        <Loading />
      ) : stateGeolocation.isError || stateData.isError ? (
        <Text>Something went wrong...</Text>
      ) : (
        <SafeAreaView>
          <LocationData
            locationCity={stateData.city}
            onUpdate={updateGeolocation}
          />
          <LocationSearch
            locationCity={stateData.city}
            onChange={changeCity} />
          <Forecast
            //data={stateData.data[0]}
            main={stateData.data[0].weather[0].main}
            description={stateData.data[0].weather[0].description}
            wind={stateData.data[0].wind}
            clouds={stateData.data[0].clouds.all}
            {...stateData.data[0].main}
          />
        </SafeAreaView>
      )}
    </View>
  );
}

export default Location;
