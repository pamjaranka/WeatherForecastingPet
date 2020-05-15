import {
  FETCH_CURRENT_FAIL,
  FETCH_CURRENT_FAIL_CITY,
  FETCH_SET_OPTIONS,
  FETCH_CURRENT_START,
  FETCH_CURRENT_SUCCESS,
  FETCH_FORECAST_SUCCESS,
  FETCH_FORECAST_START,
  FETCH_FORECAST_FAIL,
} from './actionTypes';

export default (state, {type, payload}) => {
  console.log(type);
  console.log(payload);
  switch (type) {
    case FETCH_CURRENT_START:
      return {
        ...state,
        currentData: null,
        isCurrentLoading: true,
        isCurrentError: false,
        searchCityError: false,
      };
    case FETCH_CURRENT_SUCCESS:
      return {
        ...state,
        isCurrentLoading: false,
        isCurrentError: false,
        searchCityError: false,
        currentData: payload,
      };
    case FETCH_CURRENT_FAIL:
      return {
        ...state,
        isCurrentLoading: false,
        isCurrentError: true,
        searchCityError: false,
      };
    case FETCH_CURRENT_FAIL_CITY:
      return {
        ...state,
        isLoading: false,
        isCurrentError: true,
        currentData: null,
        searchCityError: true,
      };
    case FETCH_SET_OPTIONS:
      return {
        ...state,
        isLoading: true,
        isCurrentError: false,
        // currentData: null,
        searchCityError: false,
        options: payload,
      };
    case FETCH_FORECAST_START:
      return {
        ...state,
        forecastData: null,
        isForecastLoading: true,
        isForecastError: false,
      };
    case FETCH_FORECAST_SUCCESS:
      return {
        ...state,
        isForecastLoading: false,
        isForecastError: false,
        searchCityError: false,
        forecastData: payload,
      };
    case FETCH_FORECAST_FAIL:
      return {
        ...state,
        isForecastLoading: false,
        isForecastError: true,
      };
    default:
      throw new Error();
  }
};
