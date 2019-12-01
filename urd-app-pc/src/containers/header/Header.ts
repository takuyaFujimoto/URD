import { connect } from "react-redux";
import { Action, Dispatch } from "redux";
import { headerActions } from "../../modules/header/HeaderAction";
import { Header as component } from "../../components/header/Header";
import { Store } from "../../modules/index";

function mapStatetoProps(store: Store) {
  return {
    isFetch: store.header.isFetch,
    imgPath: store.header.imgPath,
    rightContentsInfo: store.header.rightContentsInfo
  };
}

function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return {
    rightContentsOpen: (x: string) =>
      dispatch(headerActions.rightContentsOpen(x)),
    rightContentsClose: () => dispatch(headerActions.rightContentsClose()),
    dataFetch: () => dispatch(headerActions.fetchRequest())
  };
}

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(component);
