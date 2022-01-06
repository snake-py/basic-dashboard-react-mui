import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { jobReducer } from './jobReducer';

const reducers = combineReducers({
  job: jobReducer,
  app: appReducer,
});

export default reducers;


export type State = ReturnType<typeof reducers> 
