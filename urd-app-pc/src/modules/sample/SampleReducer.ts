import * as ActionTypes from "../../constants/ActionTypes";
import { sampleActions } from "./SampleAction";

export type SampleState = {
  items: string[];
};

const initialState: SampleState = {
  items: ["TEST!!!", "HOGE!!"]
};

type Actions =
  | ReturnType<typeof sampleActions.insertItemSuccess>
  | ReturnType<typeof sampleActions.deleteItemSuccess>;

export function sampleReducer(
  state = initialState,
  action: Actions
): SampleState {
  if (!state) return initialState;
  switch (action.type) {
    case ActionTypes.SAMPLE_INSERT_SUCCESS: {
      return {
        ...state,
        items: action.payload
      };
    }
    case ActionTypes.SAMPLE_DELETE_SUCCESS: {
      return {
        ...state,
        items: action.payload
      };
    }
    default: {
      return { ...state };
    }
  }
}
