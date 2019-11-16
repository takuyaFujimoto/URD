import { put, call } from "redux-saga/effects";
import { sampleActions } from "../../modules/sample/SampleAction";
import {
  COLLECTION_NAME_TEST,
  DOCUMENT_SAMPLE
} from "../../constants/DataBaseNames";
import { db } from "../../middleware/firebase";

// TODO ここのanyも後で直す
function getItems() {
  let result: string[];
  return new Promise(resolve => {
    return resolve(
      db
        .collection(COLLECTION_NAME_TEST)
        .doc(DOCUMENT_SAMPLE)
        .get()
        .then((doc: any) => {
          if (!doc) return [];
          result = doc.data().items;
          return result;
        })
    );
  });
}

function* run() {
  try {
    const items: string[] = yield call(getItems);
    yield put(sampleActions.fetchSuccess(items));
  } catch (e) {
    console.log(e);
  }
}

export default { run };
