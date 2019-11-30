import { fork, takeEvery } from "redux-saga/effects";
import * as ActionTypes from "../../constants/ActionTypes";
import { loginActions } from "../../modules/login/LoginAction";
import SignInService from "../../service/login/SignInService";

function* siginIn(action: ReturnType<typeof loginActions.handleLoginRequest>) {
  yield fork(SignInService.run, action);
}

const LoginController = [
  takeEvery(ActionTypes.LOGIN_HANDLE_LOGIN_REQUEST, siginIn)
];
export default LoginController;
