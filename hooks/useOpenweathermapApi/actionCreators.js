import {
  FETCH_CURRENT_FAIL,
  FETCH_CURRENT_FAIL_CITY,
  FETCH_SET_OPTIONS,
  FETCH_CURRENT_START,
  FETCH_CURRENT_SUCCESS,
  FETCH_FORECAST_FAIL,
  FETCH_FORECAST_START,
  FETCH_FORECAST_SUCCESS,
} from './actionTypes';

export const fetchCurrentStart = () => ({type: FETCH_CURRENT_START});
export const fetchCurrentSuccess = payload => ({type: FETCH_CURRENT_SUCCESS, payload});
export const fetchCurrentFail = () => ({type: FETCH_CURRENT_FAIL});
export const fetchCurrentFailCity = () => ({type: FETCH_CURRENT_FAIL_CITY});
export const fetchSetOptions = payload => ({type: FETCH_SET_OPTIONS, payload});
export const fetchForecastStart = () => ({type: FETCH_FORECAST_START});
export const fetchForecastSuccess = payload => ({type: FETCH_FORECAST_SUCCESS, payload});
export const fetchForecastFail = () => ({type: FETCH_FORECAST_FAIL});
