import * as ActionTypes from "../../constants/ActionTypes";

const inputLoginId = (x: string) => ({
  type: ActionTypes.LOGIN_INPUT_ID,
  payload: x
});

const inputLoginPassword = (x: string) => ({
  type: ActionTypes.LOGIN_INPUT_PASSWORD,
  payload: x
});

const handleLoginRequest = (id: string, password: string) => ({
  type: ActionTypes.LOGIN_HANDLE_LOGIN_REQUEST,
  payload: { id, password }
});

const handleLoginError = (errorCd: string) => ({
  type: ActionTypes.LOGIN_HANDLE_LOGIN_ERROR,
  payload: errorCd
});

const handleLoginSuccess = (loginFlg: boolean) => ({
  type: ActionTypes.LOGIN_HANDLE_LOGIN_SUCCESS,
  payload: loginFlg
});

export type inputLoginId = ReturnType<typeof inputLoginId>;
export type inputLoginPassword = ReturnType<typeof inputLoginPassword>;
export type handleLoginRequest = ReturnType<typeof handleLoginRequest>;
export type handleLoginError = ReturnType<typeof handleLoginError>;
export type handleLoginSuccess = ReturnType<typeof handleLoginSuccess>;
export const loginActions = {
  inputLoginId,
  inputLoginPassword,
  handleLoginRequest,
  handleLoginError,
  handleLoginSuccess
};
