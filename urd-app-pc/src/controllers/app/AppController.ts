import { fork, takeEvery } from "redux-saga/effects";
import * as ActionTypes from "../../constants/ActionTypes";
import FetchService from "../../service/app/FetchService";

function* fetch() {
  yield fork(FetchService.run);
}

const AppController = [takeEvery(ActionTypes.APP_FETCH_REQUEST, fetch)];
export default AppController;
