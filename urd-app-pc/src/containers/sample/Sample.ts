import React from "react";
import { connect } from "react-redux";
import component from "../../components/sample/Sample";
import { insertItem, deleteItem } from "../../modules/sample/SampleAction";

export default connect(
  state => ({
    // items: state.sample.items
    items: []
  }),
  { insertItem, deleteItem }
)(component);
