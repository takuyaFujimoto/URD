import { connect } from "react-redux";
import { Action, Dispatch } from "redux";
import { attendanceActions } from "../../modules/attendance/AttendanceAction";
import { AttendanceProps } from "../../components/attendance/Attendance";
import { AttendanceTable as component } from "../../components/attendance/AttendanceTable";
import { Store } from "../../modules/index";

type parentProps = {
  current: { [key: string]: string | boolean }[];
  year: string;
  month: string;
  tableHeaderName: { [key: string]: string }[];
};

function mapStatetoProps(store: Store, props: parentProps) {
  // const { current, year, month, tableHeaderName}
  return { ...props };
}

function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return {};
}

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(component);
