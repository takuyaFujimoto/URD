import { fork, takeEvery } from "redux-saga/effects";
import * as ActionTypes from "../../constants/ActionTypes";
import FetchService from "../../service/attendance/FetchService";
import PrevService from "../../service/attendance/PrevService";
import NextService from "../../service/attendance/NextService";

function* fetch() {
  yield fork(FetchService.run);
}

function* prev() {
  yield fork(PrevService.run);
}

function* next() {
  yield fork(NextService.run);
}

const AttendanceController = [
  takeEvery(ActionTypes.ATTENDANCE_FETCH_REQUEST, fetch),
  takeEvery(ActionTypes.ATTENDANCE_CHANGE_PREV_REQUEST, prev),
  takeEvery(ActionTypes.ATTENDANCE_CHANGE_NEXT_REQUEST, next),
];
export default AttendanceController;
