import {FAIL, FETCH, SET_OPTIONS, CITY, START, SUCCESS} from '../../constants';

export const FETCH_START = `${FETCH}${START}`;
export const FETCH_SUCCESS = `${FETCH}${SUCCESS}`;
export const FETCH_FAIL = `${FETCH}${FAIL}`;
export const FETCH_FAIL_CITY = `${FETCH}${FAIL}${CITY}`;
export const FETCH_SET_OPTIONS = `${FETCH}${SET_OPTIONS}`;
