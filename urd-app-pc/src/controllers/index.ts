import { all } from "redux-saga/effects";
import SampleController from "./sample/SampleController";
import AppController from "./app/AppController";
import loginController from "./login/LoginController";
import HeaderController from "./header/HeaderController";
import AttendanceController from "./attendance/AttendanceController";

function* rootSaga() {
  yield all([
    ...SampleController,
    ...AppController,
    ...loginController,
    ...HeaderController,
    ...AttendanceController
  ]);
}

export default rootSaga;
