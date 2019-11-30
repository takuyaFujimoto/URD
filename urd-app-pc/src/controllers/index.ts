import { all } from "redux-saga/effects";
import SampleController from "./sample/SampleController";
import AppController from "./app/AppController";
import loginController from "./login/LoginController";
import BaseHeaderController from "./header/BaseHeaderController";

function* rootSaga() {
  yield all([
    ...SampleController,
    ...AppController,
    ...loginController,
    ...BaseHeaderController
  ]);
}

export default rootSaga;
