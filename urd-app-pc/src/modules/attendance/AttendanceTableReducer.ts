import * as ActionTypes from "../../constants/ActionTypes";
import { attendanceTableActions } from "./AttendanceTableAction";

export type AttendanceTableState = {};

const initialState: AttendanceTableState = {};

// type Actions =
//   | ReturnType<typeof attendanceActions.fetchRequest>
//   | ReturnType<typeof attendanceActions.fetchError>
//   | ReturnType<typeof attendanceActions.fetchSuccess>;

export function attendanceTableReducer(
  state = initialState,
  action: {}
): AttendanceTableState {
  return { ...state };
}
