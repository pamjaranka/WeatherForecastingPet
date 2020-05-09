import {
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
        isLoading: true,
        isLoaded: false,
        isError: false,
      };
    case SET_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        isError: false,
        city: payload.city,
        data: payload.data,
        forecast: payload.forecast,
      };
    case SET_DATA_FAIL:
      return {
        ...state,
        isLoading: false,
        isLoaded: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};
