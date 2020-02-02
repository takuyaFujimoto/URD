import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ATTENDANCE_TABLE_HEADER_NAME } from "../../constants/Attendance";
import "../../css/attendance/AttendanceTable.scss";

type AttendanceTableProps = {
  current: { [key: string]: string | boolean }[];
  year: string;
  month: string;
  tableHeaderName: { [key: string]: string }[];
  modalOpen: (x: { [key: string]: string | boolean }) => void;
};

export const AttendanceTable: React.FC<AttendanceTableProps> = props => {
  const { current, tableHeaderName, modalOpen } = props;
  const createHead: () => JSX.Element = () => {
    return (
      <thead>
        <tr>
          {tableHeaderName.map((x, i) => (
            <th scope="col" key={i}>
              {x.value}
            </th>
          ))}
        </tr>
      </thead>
    );
  };
  const checkHoliday: (
    isHolidy: boolean,
    dayOfTheWeek: string
  ) => JSX.Element = (isHolidy: boolean, dayOfTheWeek: string) => {
    if (isHolidy || dayOfTheWeek === "日")
      return <span className="isHolidy">{`${dayOfTheWeek}`}</span>;
    if (dayOfTheWeek === "土")
      return <span className="isSaturday">{`${dayOfTheWeek}`}</span>;
    return <span>{`${dayOfTheWeek}`}</span>;
  };
  const createSell: (
    obj: { [key: string]: string | boolean },
    name: string,
    index: number
  ) => JSX.Element = (
    obj: { [key: string]: string | boolean },
    name: string,
    index: number
  ) => {
    switch (name) {
      case ATTENDANCE_TABLE_HEADER_NAME.day.value:
        return (
          <td key={index}>
            {`${obj.day}`}(
            {checkHoliday(!!obj.is_holiday, String(obj.day_of_the_week))})
          </td>
        );
      case ATTENDANCE_TABLE_HEADER_NAME.from.value:
        return <td key={index}>{`${obj.from}`}</td>;
      case ATTENDANCE_TABLE_HEADER_NAME.to.value:
        return <td key={index}>{`${obj.to}`}</td>;
      case ATTENDANCE_TABLE_HEADER_NAME.break_time.value:
        return <td key={index}>{`${obj.break_time}`}</td>;
      case ATTENDANCE_TABLE_HEADER_NAME.total.value:
        return <td key={index}>{`${obj.total}`}</td>;
      case ATTENDANCE_TABLE_HEADER_NAME.comment.value:
        return <td key={index}>{obj.comment === "-" ? "無" : "有"}</td>;
      case ATTENDANCE_TABLE_HEADER_NAME.edit.value:
        return (
          <td key={index} className="editIcon">
            <FontAwesomeIcon icon="pen-nib" onClick={() => modalOpen(obj)} />
          </td>
        );
      default:
        return <td key={index}></td>;
    }
  };
  const createBody: () => JSX.Element = () => {
    return (
      <tbody>
        {current.map((x, i) => (
          <tr key={i}>
            {tableHeaderName.map((xx, ii) => createSell(x, xx.value, ii))}
          </tr>
        ))}
      </tbody>
    );
  };

  return (
    <div className="AttendanceTable">
      <table>
        {createHead()}
        {createBody()}
      </table>
    </div>
  );
};
