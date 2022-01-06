import { JobActionTypes } from '@state/action-types';
import { JobActions } from '@state/actions';
import { Dispatch } from 'react';
// import store from '/store';

export const createJobStepper =
  (activeJobCreateStep: number) => (dispatch: Dispatch<JobActions>) => {
    console.log('createJobStepper');
    return dispatch({
      type: JobActionTypes.SET_ACTIVE_JOB_CREATE_STEP,
      payload: { activeJobCreateStep: activeJobCreateStep },
    });
  };

export const setCurrentSmallBarChartValue =
  (value: number) => (dispatch: Dispatch<JobActions>) => {
    return dispatch({
      type: JobActionTypes.CHANGE_CURRENT_SMALL_BAR_CHART_VALUE,
      payload: value,
    });
  };
