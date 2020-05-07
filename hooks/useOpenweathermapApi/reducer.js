import {START, SUCCESS, FAIL, SET_OPTIONS, FETCH} from '../../constants';

export default (state, action) => {
  console.log(action);
  switch (action.type) {
    case `${FETCH}${START}`:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case `${FETCH}${SUCCESS}`:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
        city: action.payload[0].name,
      };
    case `${FETCH}${FAIL}`:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case `${FETCH}${SET_OPTIONS}`:
      return {
        ...state,
        options: action.payload,
      };
    default:
      throw new Error();
  }
};
