import { put, call } from "redux-saga/effects";
import Cookies from "js-cookie";
import { auth } from "../../middleware/firebase";
import { loginActions } from "../../modules/login/LoginAction";
import { UID } from "../../constants/Login";
import { VALID_PERIOD } from "../../constants/Login";

type signInResult = { flg: boolean; uid: string; errorCd: string };

function checkSignIn(id: string, password: string) {
  return new Promise(resolve => {
    auth
      .signInWithEmailAndPassword(id, password)
      .then((result: any) => {
        resolve({ flg: true, uid: result.user.uid, errorCd: "" });
      })
      .catch(e => {
        console.log(e);
        resolve({ flg: false, uid: "", errorCd: "E001" });
      });
  });
}

function* run(action: ReturnType<typeof loginActions.handleLoginRequest>) {
  try {
    const { id, password } = action.payload;
    const result: signInResult = yield call(checkSignIn, id, password);
    if (result.flg) {
      Cookies.set(UID, `${result.uid}`, { expires: VALID_PERIOD });
      yield put(loginActions.handleLoginSuccess(result.flg));
    } else {
      yield put(loginActions.handleLoginError(result.errorCd));
    }
  } catch (e) {
    console.log(e);
    yield put(loginActions.handleLoginError("E999"));
  }
}

export default { run };
