import { connect } from "react-redux";
import { Action, Dispatch } from "redux";
import { loginActions } from "../../modules/login/LoginAction";
import { Login as component } from "../../components/login/Login";
import { Store } from "../../modules/index";

function mapStatetoProps(store: Store) {
  return {
    loginId: store.login.loginId,
    password: store.login.password,
    isFetch: store.login.isFetch,
    loginFlg: store.login.loginFlg,
    errorCd: store.login.errorCd
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
