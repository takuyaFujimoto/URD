import * as ActionTypes from "../../../constants/ActionTypes";

const handleLeftNavi = (status: boolean) => ({
  type: ActionTypes.HANDLE_LEFT_NAVI,
  payload: status
});

export type handleLeftNavi = ReturnType<typeof handleLeftNavi>;

export const leftNaviActions = {
  handleLeftNavi
};
