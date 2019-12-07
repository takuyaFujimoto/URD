import * as ActionTypes from "../../../constants/ActionTypes";
import { leftNaviActions } from "./LeftNaviAction";

export type LeftNaviState = {
  status: boolean;
};

const initialState: LeftNaviState = {
  status: false
};

type Actions = ReturnType<typeof leftNaviActions.handleLeftNavi>;

export function leftNaviReducer(
  state = initialState,
  action: Actions
): LeftNaviState {
  if (!state) return initialState;
  switch (action.type) {
    case ActionTypes.HANDLE_LEFT_NAVI: {
      return {
        ...state,
        status: action.payload,
      };
    }
    default: {
      return { ...state };
    }
  }
}
