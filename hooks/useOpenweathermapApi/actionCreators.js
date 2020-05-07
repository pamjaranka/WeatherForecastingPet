import {
  FETCH_FAIL,
  FETCH_SET_OPTIONS,
  FETCH_START,
  FETCH_SUCCESS,
} from './actionTypes';

export const fetchStart = () => ({type: FETCH_START});
export const fetchSuccess = payload => ({type: FETCH_SUCCESS, payload});
export const fetchFail = () => ({type: FETCH_FAIL});
export const fetchSetOptions = payload => ({type: FETCH_SET_OPTIONS, payload});
