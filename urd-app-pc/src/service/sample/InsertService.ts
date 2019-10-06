import { put, select } from "redux-saga/effects";
import * as ACTION from "../../constants/ActionTypes";

function* run(action: any) {
  const sample = yield select(state => state.sample);
  const { items } = sample;
  items.push(action.payload);
  yield put({
    type: ACTION.SAMPLE_INSERT_SUCCESS,
    payload: { items }
  });
}

export default { run };
