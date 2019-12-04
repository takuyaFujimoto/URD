import { connect } from "react-redux";
import { Action, Dispatch } from "redux";
import { rightNaviActions } from "../../../modules/sideNavi/rightNavi/RightNaviAction";
import { RightNavi as component } from "../../../components/sideNavi/rightNavi/RightNavi";
import { Store } from "../../../modules/index";

function mapStatetoProps(store: Store) {
  return {
    contentName: store.rightNavi.contentName,
    isOpen: store.rightNavi.isOpen
  };
}

function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return {
    rightNaviClose: () => dispatch(rightNaviActions.rightNaviClose())
  };
}

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(component);
