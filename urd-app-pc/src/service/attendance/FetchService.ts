import { put, call } from "redux-saga/effects";
import Cookies from "js-cookie";
import { attendanceActions } from "../../modules/attendance/AttendanceAction";
import { COLLECTION_NAME_ATTENDANCE } from "../../constants/DataBaseNames";
import { UID } from "../../constants/Login";
import { db } from "../../middleware/firebase";
import { TimeOperation } from "../../middleware/TimeOperation";

// TODO DAO作った方が良い？
function getAttendance(year: string, month: string) {
  let result: { [key: string]: string };
  const uid: string | undefined = Cookies.get(UID);
  return new Promise(resolve => {
    return resolve(
      db
        .collection(COLLECTION_NAME_ATTENDANCE)
        .doc(uid)
        .collection(year)
        .doc(month)
        .get()
        .then((x: any) => {
          result = !x ? {} : x.data();
          return result;
        })
    );
  });
}

function setCache(
  year: string,
  month: string,
  prevYM: { [key: string]: string },
  nextYM: { [key: string]: string },
  current: { [key: string]: string },
  prev: { [key: string]: string } | undefined,
  next: { [key: string]: string } | undefined
) {
  const result: { [key: string]: { [key: string]: string } }[] = [];
  result.push({ [`${year}-${month}`]: current });
  if (prev && Object.keys(prev).length !== 0) {
    result.push({ [`${prevYM.year}-${prevYM.month}`]: prev });
  }
  if (next && Object.keys(next).length !== 0) {
    result.push({ [`${nextYM.year}-${nextYM.month}`]: next });
  }
  return result;
}

function* run() {
  try {
    const timeOpration: TimeOperation = new TimeOperation();
    const year: string = timeOpration.currentYear();
    const month: string = timeOpration.currentMonth();
    const current: { [key: string]: string } = yield call(
      getAttendance,
      year,
      month
    );
    const prevYM: { [key: string]: string } = timeOpration.prevYM(
      year,
      month,
      1
    );
    const prev: { [key: string]: string } = yield call(
      getAttendance,
      prevYM.year,
      prevYM.month
    );

    const nextYM: { [key: string]: string } = timeOpration.nextYM(
      year,
      month,
      1
    );
    const next: { [key: string]: string } = yield call(
      getAttendance,
      nextYM.year,
      nextYM.month
    );
    const cache: { [key: string]: { [key: string]: string } }[] = setCache(
      year,
      month,
      prevYM,
      nextYM,
      current,
      prev,
      next
    );
    yield put(
      attendanceActions.fetchSuccess({
        cache,
        current,
        prev: prev ? prev : {},
        next: next ? next : {},
        year,
        month
      })
    );
  } catch (e) {
    console.log(e);
    yield put(attendanceActions.fetchError("E999"));
  }
}

export default { run };
