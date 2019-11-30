import { connect } from "react-redux";
import { Action, Dispatch } from "redux";
import { appActions } from "../../modules/app/AppAction";
import { App as component } from "../../components/app/App";
import { Store } from "../../modules/index";

function mapStatetoProps(store: Store) {
  return {
    userInfo: store.app.userInfo,
    errorCode: store.app.errorCode,
    isFetch: store.app.isFetch
  };
}

function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return {
    dataFetch: () => dispatch(appActions.fetchRequest()),
  };
}

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(component);
