import { connect } from "react-redux";
import { Action, Dispatch } from "redux";
import { baseHeaderActions } from "../../modules/header/BaseHeaderAction";
import { BaseHeader as component } from "../../components/header/BaseHeader";
import { Store } from "../../modules/index";

function mapStatetoProps(store: Store) {
  return {
    isFetch: store.baseHeader.isFetch
  };
}

function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return {
    dataFetch: () => dispatch(baseHeaderActions.fetchRequest())
  };
}

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(component);
