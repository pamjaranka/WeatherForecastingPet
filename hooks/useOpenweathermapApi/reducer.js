import {
  FETCH_FAIL,
  FETCH_FAIL_CITY,
  FETCH_SET_OPTIONS,
  FETCH_START,
  FETCH_SUCCESS,
} from './actionTypes';

export default (state, {type, payload}) => {
  console.log(type);
  console.log(payload);
  switch (type) {
    case FETCH_START:
      return {
        ...state,
        dataApi: null,
        isLoading: true,
        isError: false,
        searchCityError: false,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        searchCityError: false,
        dataApi: payload,
      };
    case FETCH_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
        searchCityError: false,
      };
    case FETCH_FAIL_CITY:
      return {
        ...state,
        isLoading: false,
        isError: true,
        dataApi: null,
        searchCityError: true,
      };
    case FETCH_SET_OPTIONS:
      return {
        ...state,
        isLoading: true,
        isError: false,
        // dataApi: null,
        searchCityError: false,
        options: payload,
      };
    default:
      throw new Error();
  }
};
