import { put, select } from "redux-saga/effects";
import { sampleActions } from "../../modules/sample/SampleAction";

function* run(action: ReturnType<typeof sampleActions.insertItemRequest>) {
  const sample = yield select(state => state.sample);
  const { items } = sample;
  items.push(action.payload);
  yield put(sampleActions.insertItemSuccess(items));
}

export default { run };
