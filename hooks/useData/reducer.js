import {
  SET_CITY_FAIL,
  SET_DATA_FAIL,
  SET_DATA_START,
  SET_DATA_SUCCESS,
} from './actionTypes';

export default (state, {type, payload}) => {
  console.log(type);
  console.log(payload);
  switch (type) {
    case SET_DATA_START:
      return {
        ...state,
        forecastData: null,
        isLoading: true,
        isCityError: false,
        isError: false,
      };
    case SET_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isCityError: false,
        isError: false,
        city: payload.city,
        forecastData: payload.forecastData,
      };
    case SET_DATA_FAIL:
      return {
        ...state,
        isLoading: false,
        isCityError: false,
        isError: true,
        city: null,
        forecastData: null,
      };
    case SET_CITY_FAIL:
      return {
        ...state,
        isLoading: false,
        isCityError: true,
        isError: true,
        city: null,
        forecastData: null,
      };
    default:
      throw new Error();
  }
};
