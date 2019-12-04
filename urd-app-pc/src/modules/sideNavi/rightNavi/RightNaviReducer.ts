import * as ActionTypes from "../../../constants/ActionTypes";
import { rightNaviActions } from "./RightNaviAction";

export type RightNaviState = {
  contentName: string;
  isOpen: boolean;
};

const initialState: RightNaviState = {
  contentName: "",
  isOpen: false
};

type Actions =
  | ReturnType<typeof rightNaviActions.rightNaviOpen>
  | ReturnType<typeof rightNaviActions.rightNaviClose>;

export function rightNaviReducer(
  state = initialState,
  action: Actions
): RightNaviState {
  if (!state) return initialState;
  switch (action.type) {
    case ActionTypes.RIGHT_NAVI_OPEN: {
      return {
        ...state,
        contentName: action.payload,
        isOpen: true
      };
    }

    case ActionTypes.RIGHT_NAVI_CLOSE: {
      return {
        ...state,
        contentName: "",
        isOpen: false
      };
    }
    default: {
      return { ...state };
    }
  }
}
