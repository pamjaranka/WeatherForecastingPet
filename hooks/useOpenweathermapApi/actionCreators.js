import {
  FETCH_FAIL,
  FETCH_FAIL_CITY,
  FETCH_SET_OPTIONS,
  FETCH_START,
  FETCH_SUCCESS,
} from './actionTypes';

export const fetchStart = () => ({type: FETCH_START});
export const fetchSuccess = payload => ({type: FETCH_SUCCESS, payload});
export const fetchFail = () => ({type: FETCH_FAIL});
export const fetchFailCity = () => ({type: FETCH_FAIL_CITY});
export const fetchSetOptions = payload => ({type: FETCH_SET_OPTIONS, payload});
