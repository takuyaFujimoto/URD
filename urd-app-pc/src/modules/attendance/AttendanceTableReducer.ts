export type AttendanceTableState = {};

const initialState: AttendanceTableState = {};

export function attendanceTableReducer(
  state = initialState
): AttendanceTableState {
  return { ...state };
}
