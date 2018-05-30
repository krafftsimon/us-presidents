import axios from 'axios';

export const REQUEST_PRESIDENTS = 'REQUEST_PRESIDENTS';
export const RECEIVE_PRESIDENTS = 'RECEIVE_PRESIDENTS';
export const ERROR_PRESIDENTS = 'ERROR_PRESIDENTS';

export function requestPresidents() {
  return {
    type: REQUEST_PRESIDENTS,
    payload: null,
  }
}

export function receivePresidents(response) {
  return {
    type: RECEIVE_PRESIDENTS,
    payload: response.data,
  }
}

export function errorPresidents() {
  return {
    type: ERROR_PRESIDENTS,
    payload: null,
  }
}

export function fetchUsPresidents(sortOrder) {
  const reqUrl = `http://us-presidents.krafftsimon/api/us-presidents?order=${sortOrder}`;
  return (dispatch) => {
    dispatch(requestPresidents());
    axios.get(reqUrl)
    .then((response) => {
      dispatch(receivePresidents(response));
    })
    .catch((err) => {
      console.error(err);
      dispatch(errorPresidents());
    });
  };
}