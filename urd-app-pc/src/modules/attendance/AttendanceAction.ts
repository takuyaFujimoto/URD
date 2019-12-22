import * as ActionTypes from "../../constants/ActionTypes";

const fetchRequest = () => ({
  type: ActionTypes.ATTENDANCE_FETCH_REQUEST
});

const fetchError = (x: string) => ({
  type: ActionTypes.ATTENDANCE_FETCH_ERROR,
  payload: x
});

const fetchSuccess = (x: {
  [key: string]:
    | { [key: string]: string }
    | { [key: string]: { [key: string]: string } }[]
    | string;
}) => ({
  type: ActionTypes.ATTENDANCE_FETCH_SUCCESS,
  payload: x
});

export type fetchRequest = ReturnType<typeof fetchRequest>;
export type fetchError = ReturnType<typeof fetchError>;
export type fetchSuccess = ReturnType<typeof fetchSuccess>;

export const attendanceActions = {
  fetchRequest,
  fetchError,
  fetchSuccess
};
