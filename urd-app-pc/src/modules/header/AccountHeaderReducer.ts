import * as ActionTypes from "../../constants/ActionTypes";
import { sampleActions } from "./AccountHeaderAction";

export type SampleState = {
  items: string[];
  addItemValue: string;
  deleteItemValue: string;
  isFetch: boolean;
};

const initialState: SampleState = {
  items: [],
  addItemValue: "",
  deleteItemValue: "",
  isFetch: true
};

type Actions =
  | ReturnType<typeof sampleActions.inputText>
  | ReturnType<typeof sampleActions.changePullDown>
  | ReturnType<typeof sampleActions.insertItemRequest>
  | ReturnType<typeof sampleActions.deleteItemRequest>
  | ReturnType<typeof sampleActions.fetchRequest>
  | ReturnType<typeof sampleActions.insertItemSuccess>
  | ReturnType<typeof sampleActions.deleteItemSuccess>
  | ReturnType<typeof sampleActions.fetchSuccess>;

export function sampleReducer(
  state = initialState,
  action: Actions
): SampleState {
  if (!state) return initialState;
  switch (action.type) {
    case ActionTypes.SAMPLE_INPUT_TEXT: {
      return {
        ...state,
        addItemValue: action.payload
      };
    }
    case ActionTypes.SAMPLE_CHANGE_PULL_DOWN: {
      return {
        ...state,
        deleteItemValue: action.payload
      };
    }
    case ActionTypes.SAMPLE_FETCH_REQUEST: {
      return {
        ...state,
        isFetch: true
      };
    }
    case ActionTypes.SAMPLE_INSERT_REQUEST: {
      return {
        ...state,
        isFetch: true
      };
    }
    case ActionTypes.SAMPLE_DELETE_REQUEST: {
      return {
        ...state,
        isFetch: true
      };
    }
    case ActionTypes.SAMPLE_INSERT_SUCCESS: {
      return {
        ...state,
        addItemValue: "",
        isFetch: false,
        items: action.payload
      };
    }
    case ActionTypes.SAMPLE_DELETE_SUCCESS: {
      return {
        ...state,
        isFetch: false,
        items: action.payload
      };
    }
    case ActionTypes.SAMPLE_FETCH_SUCCESS: {
      return {
        ...state,
        isFetch: false,
        items: action.payload
      };
    }
    default: {
      return { ...state };
    }
  }
}
