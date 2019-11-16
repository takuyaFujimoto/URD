import { all } from "redux-saga/effects";
import SampleController from "./sample/SampleController";
import loginController from "./login/LoginController";

function* rootSaga() {
  yield all([...SampleController, ...loginController]);
}

export default rootSaga;
