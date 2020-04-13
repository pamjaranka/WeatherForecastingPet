import {START, SUCCESS, FAIL, UPDATE, GEOLOCATION} from '../constants';

export default (state, action) => {
  console.log(action);
  switch (action.type) {
    case `${GEOLOCATION}${START}`:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case `${GEOLOCATION}${SUCCESS}`:
      return {
        ...state,
        isLoading: false,
        isError: false,
        coors: action.payload,
        updateGeolocation: false,
      };
    case `${GEOLOCATION}${FAIL}`:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case `${GEOLOCATION}${UPDATE}`:
      return {
        ...state,
        updateGeolocation: action.payload,
      };
    default:
      throw new Error();
  }
};
