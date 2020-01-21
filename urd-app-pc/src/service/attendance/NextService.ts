import { select, put, call } from "redux-saga/effects";
import Cookies from "js-cookie";
import { attendanceActions } from "../../modules/attendance/AttendanceAction";
import { COLLECTION_NAME_ATTENDANCE } from "../../constants/DataBaseNames";
import { UID } from "../../constants/Login";
import { db } from "../../middleware/firebase";
import { TimeOperation } from "../../middleware/TimeOperation";
import { AttendanceState } from "../../modules/attendance/AttendanceReducer";

// TODO DAO作った方が良い？
function getAttendance(year: string, month: string) {
  let hash: { [key: string]: { [key: string]: string | boolean } };
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
          hash = !x ? {} : x.data();
          return Object.keys(hash).map((_, i) => {
            const key: string = i + 1 < 10 ? `0${i + 1}` : `${i + 1}`;
            const result: { [key: string]: string | boolean } = hash[key];
            result.day = key;
            return result;
          });
        })
    );
  });
}

function calcTotal(
  timeOpration: TimeOperation,
  item: { [key: string]: string | boolean }[]
) {
  return item.map(x => {
    const result: string = timeOpration.calcTime(
      String(x.from),
      String(x.to),
      String(x.break_time)
    );
    x.total = result;
    return x;
  });
}

// findメソッドだと不具合があるのでこちらで
function cacheFind(
  key: string,
  cache: { [key: string]: { [key: string]: string | boolean }[] }[]
) {
  let result: { [key: string]: string | boolean }[] = [];
  cache.forEach(x => {
    if (Object.keys(x).includes(key)) {
      result = x[key];
    }
  });
  return result;
}

function* run() {
  const attendance: AttendanceState = yield select(state => state.attendance);
  const timeOpration: TimeOperation = new TimeOperation();
  try {
    const { year, month, cache } = attendance;
    const prevKey: string = `${year}-${month}`;
    const prev: { [key: string]: string | boolean }[] = cacheFind(
      prevKey,
      cache
    );
    const nextOneMonthYM: { [key: string]: string } = timeOpration.nextYM(
      year,
      month,
      1
    );
    const currentKey: string = `${nextOneMonthYM.year}-${nextOneMonthYM.month}`;
    const current: { [key: string]: string | boolean }[] = cacheFind(
      currentKey,
      cache
    );
    const nextTwoMonthYM: { [key: string]: string } = timeOpration.nextYM(
      nextOneMonthYM.year,
      nextOneMonthYM.month,
      1
    );
    let next: { [key: string]: string | boolean }[] = yield call(
      getAttendance,
      nextTwoMonthYM.year,
      nextTwoMonthYM.month
    );
    next = calcTotal(timeOpration, next);
    const newCache: {
      [key: string]: { [key: string]: string | boolean }[];
    }[] = cache.slice();
    if (!prev || prev.length !== 0) {
      newCache.push({
        [`${nextTwoMonthYM.year}-${nextTwoMonthYM.month}`]: next
      });
    }
    yield put(
      attendanceActions.changeNextSuccess({
        cache: newCache,
        current: current.sort((a, b) => Number(a.day) - Number(b.day)),
        prev: prev ? prev.sort((a, b) => Number(a.day) - Number(b.day)) : [],
        next: next ? next.sort((a, b) => Number(a.day) - Number(b.day)) : [],
        year: nextOneMonthYM.year,
        month: nextOneMonthYM.month
      })
    );
  } catch (e) {
    console.log(e.message);
    const { year, month, current, next } = attendance;
    const nextOneMonthYM: { [key: string]: string } = timeOpration.nextYM(
      year,
      month,
      1
    );
    yield put(
      attendanceActions.changeNextError({
        errorCode: "",
        current: next,
        prev: current,
        next: [],
        year: nextOneMonthYM.year,
        month: nextOneMonthYM.month
      })
    );
  }
}

export default { run };
