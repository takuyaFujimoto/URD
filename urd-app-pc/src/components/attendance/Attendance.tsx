import React from "react";
import { lifecycleHook } from "../common/LifecycleHook";
import Loding from "../../components/common/Loding";
import SlideButton from "../../components/common/SlideButton";
import { ERROR_CODE } from "../../constants/ErrorCode";
import { ATTENDANCE_TABLE_HEADER_NAME } from "../../constants/Attendance";
import AttendanceTable from "../../containers/attendance/AttendanceTable";
import "../../css/attendance/Attendance.scss";

export type AttendanceProps = {
  isFetch: boolean;
  errorCode: string;
  current: { [key: string]: string | boolean }[];
  prev: { [key: string]: string | boolean }[];
  next: { [key: string]: string | boolean }[];
  year: string;
  month: string;
  tableHeaderName: { [key: string]: string }[];
  dataFetch: () => void;
};

const Component: React.FC<AttendanceProps> = props => {
  const { isFetch, errorCode, current, year, month, tableHeaderName } = props;
  // TODO errorのデザイン考える
  // if (errorCode) return <h1>{ERROR_CODE[errorCode]}</h1>;
  return (
    <div className="Attendance">
      {isFetch ? <Loding /> : null}
      <div className="headContent">
        <div className="leftContents">
          <span className="arrow arrowLeft"></span>
          <h1>{`${year}年${month}月`}</h1>
          <span className="arrow arrowRight"></span>
        </div>
        <div className="rightContents">
          <SlideButton leftIcon="table" rightIcon="calendar-alt" />
        </div>
      </div>
      <AttendanceTable
        current={current}
        year={year}
        month={month}
        tableHeaderName={tableHeaderName}
      />
    </div>
  );
};

export const Attendance = lifecycleHook<AttendanceProps>(
  Component,
  {
    didMount: (props: AttendanceProps) => {
      props.dataFetch();
    }
  },
  "attendanceWrap"
);
