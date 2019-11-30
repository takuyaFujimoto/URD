import * as ActionTypes from "../../constants/ActionTypes";
import { loginActions } from "./LoginAction";

export type LoginState = {
  loginId: string;
  password: string;
  isFetch: boolean;
  loginFlg: boolean;
  errorCd: string;
};

const initialState: LoginState = {
  loginId: "",
  password: "",
  isFetch: false,
  loginFlg: false,
  errorCd: ""
};

type Actions =
  | ReturnType<typeof loginActions.inputLoginId>
  | ReturnType<typeof loginActions.inputLoginPassword>
  | ReturnType<typeof loginActions.handleLoginRequest>
  | ReturnType<typeof loginActions.handleLoginError>
  | ReturnType<typeof loginActions.handleLoginSuccess>;

export function loginReducer(
  state = initialState,
  action: Actions
): LoginState {
  if (!state) return initialState;
  switch (action.type) {
    case ActionTypes.LOGIN_INPUT_ID: {
      return {
        ...state,
        loginId: action.payload
      };
    }
    case ActionTypes.LOGIN_INPUT_PASSWORD: {
      return {
        ...state,
        password: action.payload
      };
    }
    case ActionTypes.LOGIN_HANDLE_LOGIN_REQUEST: {
      return {
        ...state,
        isFetch: true
      };
    }
    case ActionTypes.LOGIN_HANDLE_LOGIN_ERROR: {
      return {
        ...state,
        isFetch: false,
        errorCd: action.payload
      };
    }
    case ActionTypes.LOGIN_HANDLE_LOGIN_SUCCESS: {
      return {
        ...state,
        loginFlg: action.payload,
        isFetch: false,
        errorCd: "",
        loginId: "",
        password: ""
      };
    }
    default: {
      return { ...state };
    }
  }
}
