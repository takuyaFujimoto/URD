import React from "react";
import { lifecycleHook } from "../common/LifecycleHook";
import Loding from "../../components/common/Loding";
import SlideButton from "../../components/common/SlideButton";
import { ERROR_CODE } from "../../constants/ErrorCode";
import "../../css/Attendance.scss";

type AttendanceProps = {
  isFetch: boolean;
  errorCode: string;
  current: { [key: string]: string };
  prev: { [key: string]: string };
  next: { [key: string]: string };
  dataFetch: () => void;
};

const Component: React.FC<AttendanceProps> = props => {
  const { isFetch, errorCode } = props;
  // TODO errorのデザイン考える
  if (errorCode) return <h1>{ERROR_CODE[errorCode]}</h1>;
  return (
    <div className="Attendance">
      {isFetch ? <Loding /> : null}
      <div>
        <SlideButton leftIcon="table" rightIcon="calendar-alt" />
      </div>
    </div>
  );
};

export const Attendance = lifecycleHook<AttendanceProps>(Component, {
  didMount: (props: AttendanceProps) => {
    props.dataFetch();
  }
});

export default Attendance;
