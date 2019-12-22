import React from "react";
import { lifecycleHook } from "../common/LifecycleHook";
import Header from "../../containers/header/Header";
import LeftNavi from "../../containers/sideNavi/leftNavi/LeftNavi";
import Loding from "../../components/common/Loding";
import Attendance from "../../containers/attendance/Attendance";
import { ERROR_CODE } from "../../constants/ErrorCode";
import "../../css/App.scss";

type AppProps = {
  isFetch: boolean;
  errorCode: string;
  dataFetch: () => void;
};

const Component: React.FC<AppProps> = props => {
  const { isFetch, errorCode } = props;
  // TODO errorのデザイン考える
  if (errorCode) return <h1>{ERROR_CODE[errorCode]}</h1>;
  return (
    <div className="App">
      {isFetch ? <Loding /> : null}
      <Header />
      <div className="contentsArea">
        <LeftNavi />
        <Attendance />
      </div>
    </div>
  );
};

export const App = lifecycleHook<AppProps>(Component, {
  didMount: (props: AppProps) => {
    props.dataFetch();
  }
});

export default App;
