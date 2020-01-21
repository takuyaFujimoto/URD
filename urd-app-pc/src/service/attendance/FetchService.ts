import { put, call } from "redux-saga/effects";
import Cookies from "js-cookie";
import { attendanceActions } from "../../modules/attendance/AttendanceAction";
import { COLLECTION_NAME_ATTENDANCE } from "../../constants/DataBaseNames";
import {
  ATTENDANCE_TABLE_HEADER_NAME,
  EXCLUDE_TABLE_HEADER_NAME
} from "../../constants/Attendance";
import { UID } from "../../constants/Login";
import { db } from "../../middleware/firebase";
import { TimeOperation } from "../../middleware/TimeOperation";

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

function setCache(
  year: string,
  month: string,
  prevYM: { [key: string]: string },
  nextYM: { [key: string]: string },
  current: { [key: string]: string | boolean }[],
  prev: { [key: string]: string | boolean }[] | undefined,
  next: { [key: string]: string | boolean }[] | undefined
) {
  const result: { [key: string]: { [key: string]: string | boolean }[] }[] = [];
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
    let current: { [key: string]: string | boolean }[] = yield call(
      getAttendance,
      year,
      month
    );
    if (current.length === 0) throw new Error("E002");
    current = calcTotal(timeOpration, current);
    const prevYM: { [key: string]: string } = timeOpration.prevYM(
      year,
      month,
      1
    );
    let prev: { [key: string]: string | boolean }[] = yield call(
      getAttendance,
      prevYM.year,
      prevYM.month
    );
    prev = calcTotal(timeOpration, prev);
    const nextYM: { [key: string]: string } = timeOpration.nextYM(
      year,
      month,
      1
    );
    let next: { [key: string]: string | boolean }[] = yield call(
      getAttendance,
      nextYM.year,
      nextYM.month
    );
    next = calcTotal(timeOpration, next);
    const cache: {
      [key: string]: { [key: string]: string | boolean }[];
    }[] = setCache(year, month, prevYM, nextYM, current, prev, next);
    const tableHeaderName: { [key: string]: string }[] = Object.keys(current[0])
      .filter(x => !EXCLUDE_TABLE_HEADER_NAME.includes(x))
      .map(xx => ATTENDANCE_TABLE_HEADER_NAME[xx]);
    tableHeaderName.push(ATTENDANCE_TABLE_HEADER_NAME.edit);
    tableHeaderName.sort((a, b) => Number(a.index) - Number(b.index));
    yield put(
      attendanceActions.fetchSuccess({
        cache,
        current: current.sort((a, b) => Number(a.day) - Number(b.day)),
        prev: prev ? prev.sort((a, b) => Number(a.day) - Number(b.day)) : [],
        next: next ? next.sort((a, b) => Number(a.day) - Number(b.day)) : [],
        year,
        month,
        tableHeaderName
      })
    );
  } catch (e) {
    console.log(e.message);
    yield put(
      attendanceActions.fetchError({
        errorCode: e.message || "E999",
        year: "",
        month: ""
      })
    );
  }
}

export default { run };
