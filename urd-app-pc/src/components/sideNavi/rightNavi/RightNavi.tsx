import React from "react";
import { ACCOUNT, MESSAGE, HELP } from "../../../constants/SideNavi";
import "../../../css/sideNavi/RightNavi.scss";

type RightNaviProps = {
  contentName: string;
  isOpen: boolean;
  rightNaviClose: () => void;
};

export const RightNavi: React.FC<RightNaviProps> = props => {
  const { contentName, isOpen, rightNaviClose } = props;
  const rightNaviIsOpen: string = isOpen ? "RightNavi open" : "RightNavi close";
  const content = (x: string) => {
    if (x === ACCOUNT)
      return <div className="hoge">ACCOUNTのcontainersを返すように</div>;
    if (x === MESSAGE)
      return <div className="hoge">MESSAGEのcontainersを返すように</div>;
    if (x === HELP)
      return <div className="hoge">HELPのcontainersを返すように</div>;
    return null;
  };
  return (
    <div className={`${rightNaviIsOpen}`}>
      <div className="naviHeader">
        <h2>{`${contentName}`}</h2>
        <div className="closeButton">
          <span onClick={() => rightNaviClose()}></span>
        </div>
      </div>
      {content(contentName)}
    </div>
  );
};
