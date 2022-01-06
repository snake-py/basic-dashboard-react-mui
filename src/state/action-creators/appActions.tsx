import { AppActionTypes } from '@state/action-types';
import { AppActions } from '@state/actions';
import { Dispatch } from 'react';

export const appReady =
  (bool: boolean) => (dispatch: Dispatch<AppActions>) => {
    console.log('switchTheme: ', bool);
    return dispatch({
      type: AppActionTypes.APP_READY,
      payload: bool,
    });
  };


export const switchTheme =
  (bool: boolean) => (dispatch: Dispatch<AppActions>) => {
    console.log('switchTheme: ', bool);
    return dispatch({
      type: AppActionTypes.SWITCH_THEME,
      payload: bool,
    });
  };
