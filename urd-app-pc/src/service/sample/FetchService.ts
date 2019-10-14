import { put } from "redux-saga/effects";
import { sampleActions } from "../../modules/sample/SampleAction";

function* run() {
  const items: string[] = ["firebaseから取得した内容が入る"];
  yield put(sampleActions.fetchSuccess(items));
}

export default { run };
