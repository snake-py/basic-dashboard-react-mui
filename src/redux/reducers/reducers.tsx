import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { jobReducer } from './jobReducer';

const reducers = combineReducers({
  app: appReducer,
  job: jobReducer
});

export default reducers;
