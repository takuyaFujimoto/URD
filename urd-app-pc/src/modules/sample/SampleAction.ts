import { createActions } from "redux-actions";
import * as Action from "../../constants/ActionTypes";

export const insertItem = createActions(Action.SAMPLE_INSERT_REQUEST);
export const deleteItem = createActions(Action.SAMPLE_DELETE_REQUEST);
