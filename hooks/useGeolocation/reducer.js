import {
  GEOLOCATION_FAIL,
  GEOLOCATION_START,
  GEOLOCATION_SUCCESS,
  GEOLOCATION_UPDATE,
} from './actionTypes';

export default (state, {type, payload}) => {
  console.log(type);
  console.log(payload);
  switch (type) {
    case GEOLOCATION_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case GEOLOCATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        lat: payload.lat,
        lon: payload.lon,
      };
    case GEOLOCATION_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case GEOLOCATION_UPDATE:
      return {
        ...state,
        lat: null,
        lon: null,
      };
    default:
      throw new Error();
  }
};
