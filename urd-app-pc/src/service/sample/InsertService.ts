import { put, select } from "redux-saga/effects";
import { sampleActions } from "../../modules/sample/SampleAction";
import {
  COLLECTION_NAME_TEST,
  DOCUMENT_SAMPLE
} from "../../constants/DataBaseNames";
import { db } from "../../middleware/firebase";

function saveItems(newItems: string[]) {
  db.collection(COLLECTION_NAME_TEST)
    .doc(DOCUMENT_SAMPLE)
    .set({
      items: newItems
    });
}

function* run(action: ReturnType<typeof sampleActions.insertItemRequest>) {
  try {
    const sample = yield select(state => state.sample);
    const items: string[] = sample.items.slice();
    items.push(action.payload);
    // 処理待ちしない
    saveItems(items);
    yield put(sampleActions.insertItemSuccess(items));
  } catch (e) {
    console.log(e);
  }
}

export default { run };
