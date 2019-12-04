import * as ActionTypes from "../../../constants/ActionTypes";

const rightNaviOpen = (name: string) => ({
  type: ActionTypes.RIGHT_NAVI_OPEN,
  payload: name
});

const rightNaviClose = () => ({
  type: ActionTypes.RIGHT_NAVI_CLOSE
});

export type rightNaviOpen = ReturnType<typeof rightNaviOpen>;
export type rightNaviClose = ReturnType<typeof rightNaviClose>;

export const rightNaviActions = {
  rightNaviOpen,
  rightNaviClose
};
