import { put, call } from "redux-saga/effects";
import { baseHeaderActions } from "../../../modules/header/BaseHeaderAction";
import { storage } from "../../../middleware/firebase";

type fetchResult = { [key: string]: string };

function getImgUrl() {
  let result: string;
  return new Promise(resolve => {
    return resolve(
      storage
        .ref()
        .child("sample.jpg")
        .getDownloadURL()
        .then(url => {
          result = url;
          return result;
        })
    );
  });
}

function* run() {
  try {
    const url: string = yield call(getImgUrl);
    console.log("@@@@@@@@@@@@@@");
    console.log("url");
    const result: fetchResult = {
      imgPath: url
    };
    yield put(baseHeaderActions.fetchSuccess(result));
  } catch (e) {
    console.log(e);
    yield put(baseHeaderActions.fetchError());
  }
}

export default { run };
