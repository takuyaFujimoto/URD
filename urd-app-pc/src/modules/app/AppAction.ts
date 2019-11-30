import * as ActionTypes from "../../constants/ActionTypes";

const fetchRequest = () => ({
  type: ActionTypes.APP_FETCH_REQUEST
});

const fetchError = (x: string) => ({
  type: ActionTypes.APP_FETCH_ERROR,
  payload: x
});

const fetchSuccess = (x: { [key: string]: string }) => ({
  type: ActionTypes.APP_FETCH_SUCCESS,
  payload: x
});

export type fetchRequest = ReturnType<typeof fetchRequest>;
export type fetchError = ReturnType<typeof fetchError>;
export type fetchSuccess = ReturnType<typeof fetchSuccess>;

export const appActions = {
  fetchRequest,
  fetchError,
  fetchSuccess
};
