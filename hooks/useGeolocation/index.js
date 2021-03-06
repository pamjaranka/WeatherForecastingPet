import {useEffect, useReducer} from 'react';
import reducer from './reducer';
import {
  geolocationFail,
  geolocationUpdate,
  geolocationStart,
  geolocationSuccess,
} from './actionCreators';
import Geolocation from '@react-native-community/geolocation';

export default callback => {
  const [stateGeolocation, dispatchGeolocation] = useReducer(
    reducer,
    {
      isLoading: false,
      isError: false,
      lat: null,
      lon: null,
    },
  );

  const updateGeolocation = () => {
    dispatchGeolocation(geolocationUpdate());
  };

  useEffect(() => {
    console.log('useGeolocation useEffect');
    console.log(stateGeolocation);
    let watchId = null;
    // let didCancel = false;

    async function fetchGeolocation() {
      dispatchGeolocation(geolocationStart());

      //console.log('fetchGeolocation');

      watchId = await Geolocation.watchPosition(
        pos => {
          //console.log('watch!!');
          //let payload =
          dispatchGeolocation(
            geolocationSuccess({
              lat: pos.coords.latitude,
              lon: pos.coords.longitude,
            }),
          );

          if (typeof callback === 'function') {
            callback(pos.coords);
          }
        },
        e => {
          console.log(e);
          dispatchGeolocation(geolocationFail());
        },
        {maximumAge: 0},
      );
    }

    fetchGeolocation();

    return () => Geolocation.clearWatch(watchId);

  }, [stateGeolocation.lat, stateGeolocation.lon]);

  return [stateGeolocation, updateGeolocation];
};
