import * as ActionTypes from "../../constants/ActionTypes";

const fetchRequest = () => ({
  type: ActionTypes.ATTENDANCE_FETCH_REQUEST
});

const fetchError = (x: { [key: string]: string }) => ({
  type: ActionTypes.ATTENDANCE_FETCH_ERROR,
  payload: x
});

const fetchSuccess = (x: {
  [key: string]:
    | { [key: string]: string | boolean }
    | { [key: string]: string | boolean }[]
    | { [key: string]: { [key: string]: string | boolean } }[]
    | { [key: string]: { [key: string]: string | boolean }[] }[]
    | string[]
    | string;
}) => ({
  type: ActionTypes.ATTENDANCE_FETCH_SUCCESS,
  payload: x
});

const changePrevRequest = () => ({
  type: ActionTypes.ATTENDANCE_CHANGE_PREV_REQUEST
});

const changePrevError = (x: {
  [key: string]: { [key: string]: string | boolean }[] | string;
}) => ({
  type: ActionTypes.ATTENDANCE_CHANGE_PREV_ERROR,
  payload: x
});

const changePrevSuccess = (x: {
  [key: string]:
    | { [key: string]: string | boolean }
    | { [key: string]: string | boolean }[]
    | { [key: string]: { [key: string]: string | boolean } }[]
    | { [key: string]: { [key: string]: string | boolean }[] }[]
    | string[]
    | string;
}) => ({
  type: ActionTypes.ATTENDANCE_CHANGE_PREV_SUCCESS,
  payload: x
});

const changeNextRequest = () => ({
  type: ActionTypes.ATTENDANCE_CHANGE_NEXT_REQUEST
});

const changeNextError = (x: {
  [key: string]: { [key: string]: string | boolean }[] | string;
}) => ({
  type: ActionTypes.ATTENDANCE_CHANGE_NEXT_ERROR,
  payload: x
});

const changeNextSuccess = (x: {
  [key: string]:
    | { [key: string]: string | boolean }
    | { [key: string]: string | boolean }[]
    | { [key: string]: { [key: string]: string | boolean } }[]
    | { [key: string]: { [key: string]: string | boolean }[] }[]
    | string[]
    | string;
}) => ({
  type: ActionTypes.ATTENDANCE_CHANGE_NEXT_SUCCESS,
  payload: x
});

export type fetchRequest = ReturnType<typeof fetchRequest>;
export type fetchError = ReturnType<typeof fetchError>;
export type fetchSuccess = ReturnType<typeof fetchSuccess>;
export type changePrevRequest = ReturnType<typeof changePrevRequest>;
export type changePrevError = ReturnType<typeof changePrevError>;
export type changePrevSuccess = ReturnType<typeof changePrevSuccess>;
export type changeNextRequest = ReturnType<typeof changeNextRequest>;
export type changeNextError = ReturnType<typeof changeNextError>;
export type changeNextSuccess = ReturnType<typeof changeNextSuccess>;

export const attendanceActions = {
  fetchRequest,
  fetchError,
  fetchSuccess,
  changePrevRequest,
  changePrevError,
  changePrevSuccess,
  changeNextRequest,
  changeNextError,
  changeNextSuccess
};
