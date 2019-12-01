import { put, call } from "redux-saga/effects";
import Cookies from "js-cookie";
import { appActions } from "../../modules/app/AppAction";
import { COLLECTION_NAME_USER } from "../../constants/DataBaseNames";
import { UID } from "../../constants/Login";
import { db } from "../../middleware/firebase";

type userInfoType = { [key: string]: string };

// TODO DAO作った方が良い？
function getUserInfo() {
  let result: userInfoType;
  const uid: string | undefined = Cookies.get(UID);
  return new Promise(resolve => {
    return resolve(
      db
        .collection(COLLECTION_NAME_USER)
        .doc(uid)
        .get()
        .then((doc: any) => {
          if (!doc) return {};
          result = {
            first_name: doc.data().first_name,
            first_name_kana: doc.data().first_name_kana,
            last_name: doc.data().last_name,
            last_name_kana: doc.data().last_name_kana,
            rool: doc.data().rool
          };
          return result;
        })
    );
  });
}

function* run() {
  try {
    const userInfo: userInfoType = yield call(getUserInfo);
    yield put(appActions.fetchSuccess(userInfo));
  } catch (e) {
    console.log(e);
    yield put(appActions.fetchError("E999"));
  }
}

export default { run };
