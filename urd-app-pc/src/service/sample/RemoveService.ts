import { put, select } from "redux-saga/effects";
import { sampleActions } from "../../modules/sample/SampleAction";
import {
  COLLECTION_NAME_TEST,
  DOCUMENT_SAMPLE
} from "../../constants/DataBaseNames";
import { db } from "../../middleware/firebase";

// TODO MODEL層作った方がよいかも
function saveItems(newItems: string[]) {
  db.collection(COLLECTION_NAME_TEST)
    .doc(DOCUMENT_SAMPLE)
    .set({
      items: newItems
    });
}

function* run(action: ReturnType<typeof sampleActions.deleteItemRequest>) {
  const sample = yield select(state => state.sample);
  const items: string[] = sample.items.slice();
  const result: number = items.findIndex(x => x === action.payload);
  if (result !== -1) items.splice(result, 1);
  // 処理待ちしない
  saveItems(items);
  yield put(sampleActions.deleteItemSuccess(items));
}

export default { run };
