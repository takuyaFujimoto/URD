import { connect } from "react-redux";
import { Action, Dispatch } from "redux";
import { attendanceActions } from "../../modules/attendance/AttendanceAction";
import { Attendance as component } from "../../components/attendance/Attendance";
import { Store } from "../../modules/index";

function mapStatetoProps(store: Store) {
  return {
    current: store.attendance.current,
    prev: store.attendance.prev,
    next: store.attendance.next,
    errorCode: store.attendance.errorCode,
    isFetch: store.attendance.isFetch,
    year: store.attendance.year,
    month: store.attendance.month,
    tableHeaderName: store.attendance.tableHeaderName,
    isOpen: store.attendanceEditModal.isOpen
  };
}

function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return {
    dataFetch: () => dispatch(attendanceActions.fetchRequest()),
    prevExecute: () => dispatch(attendanceActions.changePrevRequest()),
    nextExecute: () => dispatch(attendanceActions.changeNextRequest())
  };
}

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(component);
