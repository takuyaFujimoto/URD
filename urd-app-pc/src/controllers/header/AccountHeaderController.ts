import { fork, takeEvery } from "redux-saga/effects";
import * as ActionTypes from "../../constants/ActionTypes";
import { sampleActions } from "../../modules/sample/SampleAction";
import InsertService from "../../service/sample/InsertService";
import RemoveService from "../../service/sample/RemoveService";
import FetchService from "../../service/sample/FetchService";

function* insert(action: ReturnType<typeof sampleActions.insertItemRequest>) {
  yield fork(InsertService.run, action);
}

function* remove(action: ReturnType<typeof sampleActions.deleteItemRequest>) {
  yield fork(RemoveService.run, action);
}

function* fetch() {
  yield fork(FetchService.run);
}

const SampleController = [
  takeEvery(ActionTypes.SAMPLE_INSERT_REQUEST, insert),
  takeEvery(ActionTypes.SAMPLE_DELETE_REQUEST, remove),
  takeEvery(ActionTypes.SAMPLE_FETCH_REQUEST, fetch)
];
export default SampleController;
