import { store } from '@state';
import { AppActionTypes } from '@state/action-types';
AppActionTypes
export const loadApp = () => {
    //@ts-ignore
  store.dispatch({ type: AppActionTypes.APP_READY, payload: { ready: true } });
};
