
export function appReducer(state = { ready: false }, action: { type: string, payload: any }) {
  console.log('type: ' + action.type);
  
  switch (action.type) {
    case "APP_READY":
        return {
          ...state,
          ready: true,
          darkMode: true,
          ...action.payload
        };
        case "SWITCH_THEME":
          return {
            ...state,
            ...action.payload
          };
    default:
      return state;
  }
}
