import { fork, takeEvery } from "redux-saga/effects";
import * as ACTION from "../../constants/ActionTypes";
import { sampleActions } from "../../modules/sample/SampleAction";
import InsertService from "../../service/sample/InsertService";

function* insert(action: ReturnType<typeof sampleActions.insertItemRequest>) {
  yield fork(InsertService.run, action);
}

const SampleController = [takeEvery(ACTION.SAMPLE_INSERT_REQUEST, insert)];
export default SampleController;
