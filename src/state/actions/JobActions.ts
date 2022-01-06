import { IJobCreationData } from '@state/reducer-types';
import { JobActionTypes } from '../action-types';

interface CreateJobStepper {
  type: JobActionTypes.SET_ACTIVE_JOB_CREATE_STEP;
  payload: object ;
}


interface SetCurrentSmallBarChartValue {
  type: JobActionTypes.CHANGE_CURRENT_SMALL_BAR_CHART_VALUE;
  payload: number ;
}

interface LoadJobCreateData {
  type: JobActionTypes.LOAD_JOB_CREATE_DATA;
  payload:  IJobCreationData[];
}



export type Actions = CreateJobStepper | SetCurrentSmallBarChartValue | LoadJobCreateData;
