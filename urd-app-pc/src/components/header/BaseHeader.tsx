import React from "react";
import { lifecycleHook } from "../common/LifecycleHook";
import Loding from "../../components/common/Loding";
import "../../css/BaseHeader.scss";

type BaseHeaderProps = {
  isFetch: boolean;
  dataFetch: () => void;
};

const Component: React.FC<BaseHeaderProps> = props => {
  const { isFetch } = props;
  return <div className="BaseHeader">{isFetch ? <Loding /> : null}</div>;
};

// LifecycleMethodを使用する場合のサンプル
export const BaseHeader = lifecycleHook<BaseHeaderProps>(Component, {
  didMount: (props: BaseHeaderProps) => {
    props.dataFetch();
  }
});
