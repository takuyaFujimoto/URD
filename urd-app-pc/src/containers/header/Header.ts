import { connect } from "react-redux";
import { Action, Dispatch } from "redux";
import { headerActions } from "../../modules/header/HeaderAction";
import { rightNaviActions } from "../../modules/sideNavi/rightNavi/RightNaviAction";
import { leftNaviActions } from "../../modules/sideNavi/leftNavi/LeftNaviAction";
import { Header as component } from "../../components/header/Header";
import { Store } from "../../modules/index";

function mapStatetoProps(store: Store) {
  return {
    isFetch: store.header.isFetch,
    imgPath: store.header.imgPath,
    leftNaviStatus: store.leftNavi.status
  };
}

function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return {
    rightNaviOpen: (name: string) =>
      dispatch(rightNaviActions.rightNaviOpen(name)),
    handleLeftNavi: (status: boolean) =>
      dispatch(leftNaviActions.handleLeftNavi(status)),
    dataFetch: () => dispatch(headerActions.fetchRequest())
  };
}

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(component);
