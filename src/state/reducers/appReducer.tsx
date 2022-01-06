import { AppActionTypes } from "../action-types";
import { AppActions } from "@state/actions";
import { IAppState } from "@state/reducer-types";

const initialState: IAppState = {
  ready: false,
  darkMode: true,
};

export function appReducer(
  state = initialState,
  action: AppActions
) {
  switch (action.type) {
    case AppActionTypes.APP_READY:
      return {
        ...state,
        ready: true,
      };
    case AppActionTypes.SWITCH_THEME:
      return {
        ...state,
        darkMode: action.payload,
      };
    default:
      return state;
  }
}
