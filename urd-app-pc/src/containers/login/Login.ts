import { connect } from "react-redux";
import { Action, Dispatch } from "redux";
import { loginActions } from "../../modules/login/LoginAction";
import { Login as component } from "../../components/login/Login";
import { AppState } from "../../store/ConfigureStore";

function mapStatetoProps(appState: AppState) {
  return {
    loginId: appState.login.loginId,
    password: appState.login.password,
    isFetch: appState.login.isFetch,
    userInfo: appState.login.userInfo,
    errorCd: appState.login.errorCd
  };
}

function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return {
    inputLoginId: (x: string) => dispatch(loginActions.inputLoginId(x)),
    inputLoginPassword: (x: string) =>
      dispatch(loginActions.inputLoginPassword(x)),
    handleLogin: (id: string, password: string) =>
      dispatch(loginActions.handleLoginRequest(id, password))
  };
}

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(component);
