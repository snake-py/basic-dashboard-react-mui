import { AppActionTypes } from '../action-types';

interface SwitchTheme {
  type: AppActionTypes.SWITCH_THEME;
  payload: boolean ;
}

interface AppReady {
  type: AppActionTypes.APP_READY;
  payload: boolean ;
}


export type Actions = SwitchTheme | AppReady;
