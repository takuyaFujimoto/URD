import { fork, takeEvery } from "redux-saga/effects";
import * as ActionTypes from "../../constants/ActionTypes";
import FetchService from "../../service/header/FetchService";

function* fetch() {
  yield fork(FetchService.run);
}

const HeaderController = [
  takeEvery(ActionTypes.HEADER_FETCH_REQUEST, fetch)
];
export default HeaderController;
