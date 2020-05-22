import {START, SUCCESS, FAIL, SET_DATA, CITY, NEW} from '../../constants';

export const SET_DATA_START = `${SET_DATA}${START}`;
export const SET_DATA_SUCCESS = `${SET_DATA}${SUCCESS}`;
export const SET_DATA_FAIL = `${SET_DATA}${FAIL}`;
export const SET_CITY_FAIL = `${SET_DATA}${FAIL}${CITY}`;
export const SET_CITY_NEW = `${SET_DATA}${CITY}${NEW}`;
