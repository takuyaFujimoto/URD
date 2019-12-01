import * as ActionTypes from "../../constants/ActionTypes";
import { appActions } from "./AppAction";

export type AppState = {
  userInfo: { [key: string]: string };
  isFetch: boolean;
  errorCode: string;
};

const initialState: AppState = {
  userInfo: {},
  isFetch: false,
  errorCode: ""
};

type Actions =
  | ReturnType<typeof appActions.fetchRequest>
  | ReturnType<typeof appActions.fetchError>
  | ReturnType<typeof appActions.fetchSuccess>;

export function appReducer(state = initialState, action: Actions): AppState {
  if (!state) return initialState;
  switch (action.type) {
    case ActionTypes.APP_FETCH_REQUEST: {
      return {
        ...state,
        isFetch: true
      };
    }
    case ActionTypes.APP_FETCH_ERROR: {
      return {
        ...state,
        isFetch: false,
        errorCode: action.payload
      };
    }
    case ActionTypes.APP_FETCH_SUCCESS: {
      return {
        ...state,
        isFetch: false,
        userInfo: action.payload
      };
    }
    default: {
      return { ...state };
    }
  }
}
