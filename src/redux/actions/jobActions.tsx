

export const createJobStepper = (activeJobCreateStep: number) => (dispatch: Function) => {
    console.log('type: ' + 'SET_ACTIVE_JOB_CREATE_STEP');
    console.log(activeJobCreateStep);
    
  dispatch({ type: 'SET_ACTIVE_JOB_CREATE_STEP', payload: { activeJobCreateStep: activeJobCreateStep } });
}


export const setCurrentSmallBarChartValue = (value: any) => (dispatch: Function) => {
dispatch({ type: 'CHANGE_CURRENT_SMALL_BAR_CHART_VALUE', payload: { value: value } });
}