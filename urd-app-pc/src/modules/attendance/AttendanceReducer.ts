import * as ActionTypes from "../../constants/ActionTypes";
import { attendanceActions } from "./AttendanceAction";

export type AttendanceState = {
  cache: { [key: string]: { [key: string]: string | boolean }[] }[];
  current: { [key: string]: string | boolean }[];
  prev: { [key: string]: string | boolean }[];
  next: { [key: string]: string | boolean }[];
  year: string;
  month: string;
  tableHeaderName: { [key: string]: string }[];
  isFetch: boolean;
  errorCode: string;
};

const initialState: AttendanceState = {
  cache: [],
  current: [],
  prev: [],
  next: [],
  year: "",
  month: "",
  tableHeaderName: [],
  isFetch: false,
  errorCode: ""
};

type Actions =
  | ReturnType<typeof attendanceActions.fetchRequest>
  | ReturnType<typeof attendanceActions.fetchError>
  | ReturnType<typeof attendanceActions.fetchSuccess>;

export function attendanceReducer(
  state = initialState,
  action: Actions
): AttendanceState {
  if (!state) return initialState;
  switch (action.type) {
    case ActionTypes.ATTENDANCE_FETCH_REQUEST: {
      return {
        ...state,
        isFetch: true
      };
    }
    case ActionTypes.ATTENDANCE_FETCH_ERROR: {
      return {
        ...state,
        isFetch: false,
        errorCode: action.payload
      };
    }
    case ActionTypes.ATTENDANCE_FETCH_SUCCESS: {
      return {
        ...state,
        ...action.payload,
        isFetch: false
      };
    }
    default: {
      return { ...state };
    }
  }
}
