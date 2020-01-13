import React from "react";
import { ERROR_CODE } from "../../constants/ErrorCode";
import { ATTENDANCE_TABLE_HEADER_NAME } from "../../constants/Attendance";
import "../../css/attendance/AttendanceTable.scss";

type AttendanceTableProps = {
  current: { [key: string]: string | boolean }[];
  year: string;
  month: string;
  tableHeaderName: { [key: string]: string }[];
};

export const AttendanceTable: React.FC<AttendanceTableProps> = props => {
  const { current, tableHeaderName } = props;
  const getTableBodyValue = (
    obj: { [key: string]: string | boolean },
    name: string
  ) => {
    switch (name) {
      case ATTENDANCE_TABLE_HEADER_NAME.day.value:
        return `${obj.day}(${obj.day_of_the_week})`;
      case ATTENDANCE_TABLE_HEADER_NAME.from.value:
        return `${obj.from}`;
      case ATTENDANCE_TABLE_HEADER_NAME.to.value:
        return `${obj.to}`;
      case ATTENDANCE_TABLE_HEADER_NAME.break_time.value:
        return `${obj.break_time}`;
      case ATTENDANCE_TABLE_HEADER_NAME.total.value:
        return `${obj.total}`;
      case ATTENDANCE_TABLE_HEADER_NAME.comment.value:
        return obj.comment === "-" ? "無" : "有";
      default:
        return null;
    }
  };
  // TODO errorのデザイン考える
  // if (errorCode) return <h1>{ERROR_CODE[errorCode]}</h1>;
  return (
    <div className="AttendanceTable">
      <table>
        <thead>
          <tr>
            {tableHeaderName.map((x, i) => (
              <th scope="col" key={i}>
                {x.value}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {current.map((x, i) => (
            <tr key={i}>
              {tableHeaderName.map((xx, ii) => (
                <td key={ii}>{getTableBodyValue(x, xx.value)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
