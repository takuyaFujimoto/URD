import { put, call } from "redux-saga/effects";
import Cookies from "js-cookie";
import { headerActions } from "../../modules/header/HeaderAction";
import { UID } from "../../constants/Login";
import { storage } from "../../middleware/firebase";

type hashType = { [key: string]: string };
function setImgUrls(urls: hashType) {
  const uid: string | undefined = Cookies.get(UID);
  const set = (name: string, extension: string) => {
    return new Promise(resolve => {
      return resolve(
        storage
          .ref()
          .child(`${uid}/${name}.${extension}`)
          .getDownloadURL()
          .then(url => {
            urls[name] = url;
          })
      );
    });
  };
  return Promise.all([set("small", "jpg"), set("large", "jpg")]);
}

function* run() {
  try {
    const urls: hashType = {};
    yield call(setImgUrls, urls);
    const result: hashType = {
      small: urls["small"],
      large: urls["large"]
    };
    yield put(headerActions.fetchSuccess(result));
  } catch (e) {
    console.log(e);
    yield put(headerActions.fetchError());
  }
}

export default { run };
