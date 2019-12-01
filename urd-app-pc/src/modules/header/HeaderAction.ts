import * as ActionTypes from "../../constants/ActionTypes";

const fetchRequest = () => ({
  type: ActionTypes.HEADER_FETCH_REQUEST
});

const fetchError = () => ({
  type: ActionTypes.HEADER_FETCH_ERROR
});

const fetchSuccess = (fetchResult: { [key: string]: string }) => ({
  type: ActionTypes.HEADER_FETCH_SUCCESS,
  payload: fetchResult
});

const rightContentsOpen = (x: string) => ({
  type: ActionTypes.HEADER_RIGHT_CONTENTS_OPEN,
  payload: x
});

const rightContentsClose = () => ({
  type: ActionTypes.HEADER_RIGHT_CONTENTS_CLOSE
});

export type fetchRequest = ReturnType<typeof fetchRequest>;
export type fetchError = ReturnType<typeof fetchError>;
export type fetchSuccess = ReturnType<typeof fetchSuccess>;
export type rightContentsOpen = ReturnType<typeof rightContentsOpen>;
export type rightContentsClose = ReturnType<typeof rightContentsClose>;

export const headerActions = {
  fetchRequest,
  fetchError,
  fetchSuccess,
  rightContentsOpen,
  rightContentsClose
};
