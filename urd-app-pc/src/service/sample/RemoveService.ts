import { put, select } from "redux-saga/effects";
import { sampleActions } from "../../modules/sample/SampleAction";

function* run(action: ReturnType<typeof sampleActions.deleteItemRequest>) {
  const sample = yield select(state => state.sample);
  const items: string[] = sample.items.slice();
  const result: number = items.findIndex(x => x === action.payload);
  if (result !== -1) items.splice(result, 1);
  yield put(sampleActions.deleteItemSuccess(items));
}

export default { run };
