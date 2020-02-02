import * as ActionTypes from "../../constants/ActionTypes";
import { attendanceEditModalActions } from "./AttendanceEditModalAction";

export type AttendanceEditModalState = {
  isOpen: boolean;
  item: { [key: string]: string | boolean };
  newFrom: string;
  newTo: string;
  newBreakTime: string;
};

const initialState: AttendanceEditModalState = {
  isOpen: false,
  item: {},
  newFrom: "",
  newTo: "",
  newBreakTime: ""
};

type Actions =
  | ReturnType<typeof attendanceEditModalActions.modalOpen>
  | ReturnType<typeof attendanceEditModalActions.modalClose>;

export function attendanceEditModalReducer(
  state = initialState,
  action: Actions
): AttendanceEditModalState {
  if (!state) return initialState;
  switch (action.type) {
    case ActionTypes.ATTENDANCE_EDIT_OPEN: {
      return {
        ...state,
        item: action.payload,
        isOpen: true
      };
    }
    case ActionTypes.ATTENDANCE_EDIT_CLOSE: {
      return {
        ...state,
        isOpen: false
      };
    }
    default: {
      return { ...state };
    }
  }
}
