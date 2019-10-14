import * as ActionTypes from "../../constants/ActionTypes";

const inputText = (x: string) => ({
  type: ActionTypes.SAMPLE_INPUT_TEXT,
  payload: x
});

const changePullDown = (x: string) => ({
  type: ActionTypes.SAMPLE_CHANGE_PULL_DOWN,
  payload: x
});

const insertItemRequest = (x: string) => ({
  type: ActionTypes.SAMPLE_INSERT_REQUEST,
  payload: x
});

const deleteItemRequest = (x: string) => ({
  type: ActionTypes.SAMPLE_DELETE_REQUEST,
  payload: x
});

const fetchRequest = () => ({
  type: ActionTypes.SAMPLE_FETCH_REQUEST
});

const insertItemSuccess = (x: string[]) => ({
  type: ActionTypes.SAMPLE_INSERT_SUCCESS,
  payload: x
});

const deleteItemSuccess = (x: string[]) => ({
  type: ActionTypes.SAMPLE_DELETE_SUCCESS,
  payload: x
});

// TODO errorのアクションも作成してハンドリングすること
const fetchSuccess = (x: string[]) => ({
  type: ActionTypes.SAMPLE_FETCH_SUCCESS,
  payload: x
});

// TODO typeのexportまとめられないか？
export type inputText = ReturnType<typeof inputText>;
export type changePullDown = ReturnType<typeof changePullDown>;
export type insertItemRequest = ReturnType<typeof insertItemRequest>;
export type deleteItemRequest = ReturnType<typeof deleteItemRequest>;
export type fetchRequest = ReturnType<typeof fetchRequest>;
export type insertItemSuccess = ReturnType<typeof insertItemSuccess>;
export type deleteItemSuccess = ReturnType<typeof deleteItemSuccess>;
export type fetchSuccess = ReturnType<typeof fetchSuccess>;

export const sampleActions = {
  inputText,
  changePullDown,
  insertItemRequest,
  deleteItemRequest,
  fetchRequest,
  insertItemSuccess,
  deleteItemSuccess,
  fetchSuccess
};
