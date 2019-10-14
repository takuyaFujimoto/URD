import * as ActionTypes from "../../constants/ActionTypes";

const insertItemRequest = (x: string) => ({
  type: ActionTypes.SAMPLE_INSERT_REQUEST,
  payload: x
});

const deleteItemRequest = (x: string) => ({
  type: ActionTypes.SAMPLE_DELETE_REQUEST,
  payload: x
});

const insertItemSuccess = (x: string[]) => ({
  type: ActionTypes.SAMPLE_INSERT_SUCCESS,
  payload: x
});

const deleteItemSuccess = (x: string[]) => ({
  type: ActionTypes.SAMPLE_DELETE_SUCCESS,
  payload: x
});

// TODO typeのexportまとめられないか？
export type insertItemRequest = ReturnType<typeof insertItemRequest>;
export type deleteItemRequest = ReturnType<typeof deleteItemRequest>;
export type insertItemSuccess = ReturnType<typeof insertItemSuccess>;
export type deleteItemSuccess = ReturnType<typeof deleteItemSuccess>;
export const sampleActions = {
  insertItemRequest,
  deleteItemRequest,
  insertItemSuccess,
  deleteItemSuccess
};
