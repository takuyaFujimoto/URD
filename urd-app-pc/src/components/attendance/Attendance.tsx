import React from "react";
import { lifecycleHook } from "../common/LifecycleHook";
import Loding from "../../components/common/Loding";
import SlideButton from "../../components/common/SlideButton";
import { ERROR_CODE } from "../../constants/ErrorCode";
import AttendanceTable from "../../containers/attendance/AttendanceTable";
import AttendanceEditModal from "../../containers/attendance/AttendanceEditModal";
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
  isOpen: boolean;
  dataFetch: () => void;
  prevExecute: () => void;
  nextExecute: () => void;
};

const Component: React.FC<AttendanceProps> = props => {
  const {
    isFetch,
    errorCode,
    current,
    prev,
    next,
    year,
    month,
    tableHeaderName,
    isOpen,
    prevExecute,
    nextExecute
  } = props;
  const mainContent: () => JSX.Element = () => {
    if (errorCode && errorCode === "E002") {
      return (
        <div className="noData">
          <h2>{ERROR_CODE[errorCode]}</h2>
        </div>
      );
    } else {
      return (
        <AttendanceTable
          current={current}
          year={year}
          month={month}
          tableHeaderName={tableHeaderName}
        />
      );
    }
  };
  return (
    <div className="Attendance">
      {isFetch ? <Loding /> : null}
      {isOpen ? <AttendanceEditModal /> : null}
      <div className="headContent">
        <div className="leftContents">
          {prev.length !== 0 ? (
            <span
              className="arrow arrowLeft"
              onClick={() => prevExecute()}
            ></span>
          ) : (
            <span className="arrow arrowLeft invalid"></span>
          )}
          <h1>{`${year}年${month}月`}</h1>
          {next.length !== 0 ? (
            <span
              className="arrow arrowRight"
              onClick={() => nextExecute()}
            ></span>
          ) : (
            <span className="arrow arrowRight invalid"></span>
          )}
        </div>
        <div className="rightContents">
          <SlideButton leftIcon="table" rightIcon="calendar-alt" />
        </div>
      </div>
      {mainContent()}
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
