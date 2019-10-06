import { fork, takeEvery } from "redux-saga/effects";
import * as ACTION from "../../constants/ActionTypes";
import InsertService from "../../service/sample/InsertService";

function* insert(action: any) {
  yield fork(InsertService.run, action);
}

const SampleController: object = [
  takeEvery(ACTION.SAMPLE_INSERT_REQUEST, insert)
];
export default SampleController;
