import { all } from "redux-saga/effects";
import SampleController from "./sample/SampleController";

function* rootSaga() {
  yield all([...SampleController]);
}
export default rootSaga;
