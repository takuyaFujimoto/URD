import { fork, takeEvery } from "redux-saga/effects";
import * as ActionTypes from "../../constants/ActionTypes";
import FetchService from "../../service/attendance/FetchService";

function* fetch() {
  yield fork(FetchService.run);
}

const AttendanceController = [takeEvery(ActionTypes.ATTENDANCE_FETCH_REQUEST, fetch)];
export default AttendanceController;
