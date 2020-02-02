import { connect } from "react-redux";
import { Action, Dispatch } from "redux";
import { attendanceEditModalActions } from "../../modules/attendance/AttendanceEditModalAction";
import { AttendanceEditModal as component } from "../../components/attendance/AttendanceEditModal";
import { Store } from "../../modules/index";

function mapStatetoProps(store: Store) {
  return {
    item: store.attendanceEditModal.item,
    newFrom: store.attendanceEditModal.newFrom,
    newTo: store.attendanceEditModal.newTo,
    newBreakTime: store.attendanceEditModal.newBreakTime,
  };
}

function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return {
    modalClose: () => dispatch(attendanceEditModalActions.modalClose())
  };
}

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(component);
