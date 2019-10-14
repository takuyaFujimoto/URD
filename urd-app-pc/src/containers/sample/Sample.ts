import { connect } from "react-redux";
import { Action, Dispatch } from "redux";
import { sampleActions } from "../../modules/sample/SampleAction";
import component from "../../components/sample/Sample";
import { AppState } from "../../store/ConfigureStore";

function mapStatetoProps(appState: AppState) {
  return {
    items: appState.sample.items,
    addItemValue: appState.sample.addItemValue,
    deleteItemValue: appState.sample.deleteItemValue,
    isFetch: appState.sample.isFetch
  };
}

function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return {
    dataFetch: () => dispatch(sampleActions.fetchRequest()),
    inputText: (x: string) => dispatch(sampleActions.inputText(x)),
    changePullDown: (x: string) => dispatch(sampleActions.changePullDown(x)),
    insertItem: (x: string) => dispatch(sampleActions.insertItemRequest(x)),
    deleteItem: (x: string) => dispatch(sampleActions.deleteItemRequest(x))
  };
}

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(component);
