import React from "react";
import { Link } from "react-router-dom";
import { lifecycleHook } from "../common/LifecycleHook";
import Header from "../../containers/header/Header";
import Loding from "../../components/common/Loding";
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
      <Link to="/sample">SAMPLE</Link>
    </div>
  );
};

export const App = lifecycleHook<AppProps>(Component, {
  didMount: (props: AppProps) => {
    props.dataFetch();
  }
});

export default App;
