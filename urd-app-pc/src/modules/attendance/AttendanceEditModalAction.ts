import * as ActionTypes from "../../constants/ActionTypes";

const modalOpen = (x: { [key: string]: string | boolean }) => ({
  payload: x,
  type: ActionTypes.ATTENDANCE_EDIT_OPEN
});

const modalClose = () => ({
  type: ActionTypes.ATTENDANCE_EDIT_CLOSE
});

export type modalOpen = ReturnType<typeof modalOpen>;
export type modalClose = ReturnType<typeof modalClose>;

export const attendanceEditModalActions = {
  modalOpen,
  modalClose
};
