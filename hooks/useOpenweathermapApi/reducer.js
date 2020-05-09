import {
  FETCH_FAIL,
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
        isLoading: true,
        isError: false,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        dataApi: payload,
      };
    case FETCH_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case FETCH_SET_OPTIONS:
      return {
        ...state,
        options: payload,
      };
    default:
      throw new Error();
  }
};
