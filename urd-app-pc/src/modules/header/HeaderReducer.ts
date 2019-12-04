import * as ActionTypes from "../../constants/ActionTypes";
import { headerActions } from "./HeaderAction";

export type HeaderState = {
  isFetch: boolean;
  imgPath: { [key: string]: string };
};

const initialState: HeaderState = {
  isFetch: false,
  imgPath: {
    small: "",
    large: ""
  }
};

type Actions =
  | ReturnType<typeof headerActions.fetchRequest>
  | ReturnType<typeof headerActions.fetchError>
  | ReturnType<typeof headerActions.fetchSuccess>;

export function headerReducer(
  state = initialState,
  action: Actions
): HeaderState {
  if (!state) return initialState;
  switch (action.type) {
    case ActionTypes.HEADER_FETCH_REQUEST: {
      return {
        ...state,
        isFetch: true
      };
    }
    // TODO エラーハンドリングを考える
    case ActionTypes.HEADER_FETCH_ERROR: {
      return {
        ...state,
        isFetch: false
      };
    }
    case ActionTypes.HEADER_FETCH_SUCCESS: {
      return {
        ...state,
        imgPath: { ...action.payload },
        isFetch: false
      };
    }
    default: {
      return { ...state };
    }
  }
}
