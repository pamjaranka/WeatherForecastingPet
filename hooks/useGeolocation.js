import {useEffect, useReducer} from 'react';
import geolocationReducer from '../reducer/geolocation';
import {FAIL, GEOLOCATION, START, SUCCESS, UPDATE} from '../constants';
import Geolocation from '@react-native-community/geolocation';

export default callback => {
  const [stateGeolocation, dispatchGeolocation] = useReducer(
    geolocationReducer,
    {
      isLoading: false,
      isError: false,
      coors: null,
      updateGeolocation: true,
    },
  );

  const updateGeolocation = () => {
    dispatchGeolocation({type: `${GEOLOCATION}${UPDATE}`, payload: true});
  };

  // console.log('useGeolocation (stateGeolocation)');
  // console.log(stateGeolocation);

  useEffect(() => {
    // console.log('useGeolocation useEffect');
    // console.log(stateGeolocation);
    let watchId = null;
    async function fetchGeolocation() {
      dispatchGeolocation({type: `${GEOLOCATION}${START}`});

      //console.log('fetchGeolocation');

      watchId = await Geolocation.watchPosition(
        pos => {
          //console.log('watch!!');
          //let payload =
          dispatchGeolocation({
            type: `${GEOLOCATION}${SUCCESS}`,
            payload: {
              lat: pos.coords.latitude,
              lon: pos.coords.longitude,
            },
          });

          if (typeof callback === 'function') {
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

    return () => Geolocation.clearWatch(watchId);
  }, [stateGeolocation.updateGeolocation]);

  return [stateGeolocation, updateGeolocation];
};
