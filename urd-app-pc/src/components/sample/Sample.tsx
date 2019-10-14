import React from "react";
import "../../css/Sample.scss";

type SampleProps = {
  items: string[];
};
const Sample: React.FC<SampleProps> = props => {
  return <div className="App">{props.items}</div>;
};

export default Sample;
