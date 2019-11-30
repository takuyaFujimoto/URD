import * as ActionTypes from "../../constants/ActionTypes";

const fetchRequest = () => ({
  type: ActionTypes.BASEHEADER_FETCH_REQUEST
});

const fetchError = () => ({
  type: ActionTypes.BASEHEADER_FETCH_ERROR
});

const fetchSuccess = (fetchResult: { [key: string]: string }) => ({
  type: ActionTypes.BASEHEADER_FETCH_SUCCESS,
  payload: fetchResult
});

export type fetchRequest = ReturnType<typeof fetchRequest>;
export type fetchError = ReturnType<typeof fetchError>;
export type fetchSuccess = ReturnType<typeof fetchSuccess>;

export const baseHeaderActions = {
  fetchRequest,
  fetchError,
  fetchSuccess
};
