import { combineReducers } from 'redux';

import usPresidentsReducer from './us-presidents-reducer';

const rootReducer = combineReducers({
  usPresidents: usPresidentsReducer,
})

export default rootReducer;