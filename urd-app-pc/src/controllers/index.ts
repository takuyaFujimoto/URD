import { all } from "redux-saga/effects";
import SampleController from "./sample/SampleController";
import AppController from "./app/AppController";
import loginController from "./login/LoginController";
import HeaderController from "./header/HeaderController";

function* rootSaga() {
  yield all([
    ...SampleController,
    ...AppController,
    ...loginController,
    ...HeaderController
  ]);
}

export default rootSaga;
