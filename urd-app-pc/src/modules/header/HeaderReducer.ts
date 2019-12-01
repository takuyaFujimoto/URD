import * as ActionTypes from "../../constants/ActionTypes";
import { headerActions } from "./HeaderAction";

export type HeaderState = {
  isFetch: boolean;
  imgPath: { [key: string]: string };
  rightContentsInfo: { name: string; isOpen: boolean };
};

const initialState: HeaderState = {
  isFetch: false,
  imgPath: {
    small: "",
    large: ""
  },
  rightContentsInfo: {
    name: "",
    isOpen: false
  }
};

type Actions =
  | ReturnType<typeof headerActions.fetchRequest>
  | ReturnType<typeof headerActions.fetchError>
  | ReturnType<typeof headerActions.fetchSuccess>
  | ReturnType<typeof headerActions.rightContentsOpen>
  | ReturnType<typeof headerActions.rightContentsClose>;

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

    case ActionTypes.HEADER_RIGHT_CONTENTS_OPEN: {
      return {
        ...state,
        rightContentsInfo: { name: action.payload, isOpen: true }
      };
    }

    case ActionTypes.HEADER_RIGHT_CONTENTS_CLOSE: {
      return {
        ...state,
        rightContentsInfo: { name: "", isOpen: false }
      };
    }
    default: {
      return { ...state };
    }
  }
}
