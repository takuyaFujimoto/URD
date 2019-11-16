import { put, call } from "redux-saga/effects";
import Cookies from "js-cookie";
import { auth, db } from "../../middleware/firebase";
import { loginActions } from "../../modules/login/LoginAction";
import { LOGIN_FLG } from "../../constants/Login";
import { COLLECTION_NAME_USER } from "../../constants/DataBaseNames";

// type
type userResult = { [key: string]: string };
type signInResult = { flg: boolean; uid: string; errorCd: string };

// userテーブル設計中
function getUserInfo(uid: string) {
  let result: userResult;
  return new Promise(resolve => {
    return resolve(
      db
        .collection(COLLECTION_NAME_USER)
        .doc(uid)
        .get()
        .then((doc: any) => {
          if (!doc) return {};
          result = { uid, name: doc.data().name };
          return result;
        })
    );
  });
}

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
      const userInfo: userResult = yield call(getUserInfo, result.uid);
      Cookies.set(LOGIN_FLG, "true", { expires: 7 });
      yield put(loginActions.handleLoginSuccess(userInfo));
    } else {
      yield put(loginActions.handleLoginError(result.errorCd));
    }
  } catch (e) {
    console.log(e);
    yield put(loginActions.handleLoginError("E999"));
  }
}

export default { run };
