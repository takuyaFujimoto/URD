import * as ActionTypes from "../../constants/ActionTypes";
import { baseHeaderActions } from "./BaseHeaderAction";

export type BaseHeaderState = {
  isFetch: boolean;
  imgPath: string;
};

const initialState: BaseHeaderState = {
  isFetch: false,
  imgPath: ""
};

type Actions =
  | ReturnType<typeof baseHeaderActions.fetchRequest>
  | ReturnType<typeof baseHeaderActions.fetchError>
  | ReturnType<typeof baseHeaderActions.fetchSuccess>;

export function baseHeaderReducer(
  state = initialState,
  action: Actions
): BaseHeaderState {
  if (!state) return initialState;
  switch (action.type) {
    case ActionTypes.BASEHEADER_FETCH_REQUEST: {
      return {
        ...state,
        isFetch: true
      };
    }
    // TODO エラーハンドリングを考える
    case ActionTypes.BASEHEADER_FETCH_ERROR: {
      return {
        ...state,
        isFetch: false
      };
    }
    case ActionTypes.BASEHEADER_FETCH_SUCCESS: {
      return {
        ...state,
        ...action.payload,
        isFetch: false,
      };
    }
    default: {
      return { ...state };
    }
  }
}
