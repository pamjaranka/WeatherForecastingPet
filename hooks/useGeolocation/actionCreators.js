import {
  GEOLOCATION_FAIL,
  GEOLOCATION_START,
  GEOLOCATION_SUCCESS,
  GEOLOCATION_UPDATE,
} from './actionTypes';

export const geolocationStart = () => ({type: GEOLOCATION_START});
export const geolocationSuccess = payload => ({type: GEOLOCATION_SUCCESS, payload});
export const geolocationFail = () => ({type: GEOLOCATION_FAIL});
export const geolocationUpdate = payload => ({type: GEOLOCATION_UPDATE, payload});
