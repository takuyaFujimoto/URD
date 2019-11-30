import { connect } from "react-redux";
import { Action, Dispatch } from "redux";
import { sampleActions } from "../../modules/sample/SampleAction";
import { Sample as component } from "../../components/sample/Sample";
import { Store } from "../../modules/index";

function mapStatetoProps(store: Store) {
  return {
    items: store.sample.items,
    addItemValue: store.sample.addItemValue,
    deleteItemValue: store.sample.deleteItemValue,
    isFetch: store.sample.isFetch
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
