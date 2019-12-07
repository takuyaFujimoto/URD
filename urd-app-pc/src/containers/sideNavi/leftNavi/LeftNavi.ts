import { connect } from "react-redux";
import { Action, Dispatch } from "redux";
import { LeftNavi as component } from "../../../components/sideNavi/leftNavi/LeftNavi";
import { Store } from "../../../modules/index";

function mapStatetoProps(store: Store) {
  return {
    status: store.leftNavi.status
  };
}

function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return {};
}

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(component);
