import { fork, takeEvery } from "redux-saga/effects";
import * as ActionTypes from "../../constants/ActionTypes";
import FetchService from "../../service/header/base/FetchService";

function* fetch() {
  yield fork(FetchService.run);
}

const BaseHeaderController = [
  takeEvery(ActionTypes.BASEHEADER_FETCH_REQUEST, fetch)
];
export default BaseHeaderController;
