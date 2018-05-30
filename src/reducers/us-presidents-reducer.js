import { 
  REQUEST_PRESIDENTS, 
  RECEIVE_PRESIDENTS,
  ERROR_PRESIDENTS
} from '../actions/index';

const defaultState = {
  isFetching: false,
  hasError: false,
  data: [],
};

export default function usPresidentsReducer(state = defaultState, action) {
  switch (action.type) {
    case REQUEST_PRESIDENTS:
      return {...state, isFetching: true};
    case RECEIVE_PRESIDENTS:
      return {isFetching: false, hasError: false, data: action.payload.usPresidents};
    case ERROR_PRESIDENTS:
      return {...state, isFetching: false, hasError: true};
    default:
      return state;
  }
}