import {
  SET_CITY_FAIL,
  SET_DATA_FAIL,
  SET_DATA_START,
  SET_DATA_SUCCESS,
} from './actionTypes';

export const setDataStart = () => ({type: SET_DATA_START});
export const setDataSuccess = payload => ({type: SET_DATA_SUCCESS, payload});
export const setDataFail = () => ({type: SET_DATA_FAIL});
export const setCityFail = () => ({type: SET_CITY_FAIL});
