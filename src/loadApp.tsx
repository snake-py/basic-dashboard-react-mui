import { JobActionCreators, store } from '@state';
import { AppActionTypes, JobActionTypes } from '@state/action-types';
import { bindActionCreators } from 'redux';
export const loadApp = () => {

  //@ts-ignore
  store.dispatch({ type: AppActionTypes.APP_READY, payload: { ready: true } });
  // loadJobCreateData(1);
  //@ts-ignore
  store.dispatch(JobActionCreators.loadJobCreateData('1'))
};
