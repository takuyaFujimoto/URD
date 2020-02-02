import { connect } from "react-redux";
import { Action, Dispatch } from "redux";
import { attendanceEditModalActions } from "../../modules/attendance/AttendanceEditModalAction";
import { AttendanceTable as component } from "../../components/attendance/AttendanceTable";
import { Store } from "../../modules/index";

type parentProps = {
  current: { [key: string]: string | boolean }[];
  year: string;
  month: string;
  tableHeaderName: { [key: string]: string }[];
};

function mapStatetoProps(store: Store, props: parentProps) {
  return { ...props };
}

function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return {
    modalOpen: (x: { [key: string]: string | boolean }) =>
      dispatch(attendanceEditModalActions.modalOpen(x))
  };
}

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(component);
