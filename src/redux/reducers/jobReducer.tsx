
export function jobReducer(state = { jobs: [], activeJobCreateStep: 0}, action: { type: string, payload: any }) {
    console.log('type: ' + action.type);    
    switch (action.type) {
      case "SET_ACTIVE_JOB_CREATE_STEP":
          return {
            ...state,
            ...action.payload
          };
      default:
        return state;
    }
  }
  