import {useEffect, useReducer} from 'react';
import geolocationReducer from '../reducer/geolocation';
import {FAIL, GEOLOCATION, START, SUCCESS} from '../constants';
import Geolocation from '@react-native-community/geolocation';

export default callback => {
  const [stateGeolocation, dispatchGeolocation] = useReducer(
    geolocationReducer,
    {
      isLoading: true,
      isError: false,
      coors: null,
      updateGeolocation: true,
    },
  );

  console.log('useGeolocation (stateGeolocation)');
  console.log(stateGeolocation);

  useEffect(() => {
    console.log('useGeolocation useEffect');
    console.log(stateGeolocation);
    let watchId = null;
    async function fetchGeolocation() {
      dispatchGeolocation({type: `${GEOLOCATION}${START}`});

      console.log('fetchGeolocation');

      watchId = await Geolocation.watchPosition(
        pos => {
          console.log('watch!!');
          //let payload =
          dispatchGeolocation({
            type: `${GEOLOCATION}${SUCCESS}`,
            payload: {
              lat: pos.coords.latitude,
              lon: pos.coords.longitude,
            },
          });

          if (typeof callback === 'function') {
            console.dir(callback)
            callback(pos.coords);
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
    // .then( () => {
    //   console.log('THEN');
    //   console.log(stateGeolocation);
    // });

    return () => Geolocation.clearWatch(watchId);
  }, [stateGeolocation.updateGeolocation]);

  return [stateGeolocation, dispatchGeolocation];
};
