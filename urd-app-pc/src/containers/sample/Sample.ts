import { Action } from "typescript-fsa";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { sampleActions } from "../../modules/sample/SampleAction";
import component from "../../components/sample/Sample";
import { AppState } from "../../store/ConfigureStore";

export interface SampleActions {
  insertItem: (x: string) => Action<string>;
  deleteItem: (x: string) => Action<string>;
}

function mapStatetoProps(appState: AppState) {
  return {
    items: appState.sample.items
  };
}

function mapDispatchToProps(dispatch: Dispatch<Action<string>>) {
  return {
    insertItem: (x: string) => dispatch(sampleActions.insertItemRequest(x)),
    deleteItem: (x: string) => dispatch(sampleActions.deleteItemRequest(x))
  };
}

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(component);
