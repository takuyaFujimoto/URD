import { handleActions } from "redux-actions";
import * as Action from "../../constants/ActionTypes";

const initialState = {
  items: []
};

export default handleActions(
  {
    [Action.SAMPLE_INSERT_SUCCESS]: (state, action) => ({
      ...state,
      ...action.payload
    })
    // [Action.SAMPLE_INSERT_SUCCESS] : (state, action) => ({
    //   ...state,
    //   items: action.payload.value
    // }),
  },
  initialState
);
