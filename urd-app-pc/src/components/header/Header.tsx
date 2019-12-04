import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { lifecycleHook } from "../common/LifecycleHook";
import Loding from "../../components/common/Loding";
import RightNavi from "../../containers/sideNavi/rightNavi/RightNavi";
import { ACCOUNT, MESSAGE, HELP } from "../../constants/SideNavi";
import "../../css/Header.scss";

type HeaderProps = {
  isFetch: boolean;
  imgPath: { [key: string]: string };
  rightNaviOpen: (x: string) => void;
  dataFetch: () => void;
};

const Component: React.FC<HeaderProps> = props => {
  const { isFetch, imgPath, rightNaviOpen } = props;
  return (
    <div className="Header">
      {isFetch ? <Loding /> : null}
      <div className="contentsWrapper">
        <div className="leftContents">
          <div className="arrow right">
            <span className="inner"></span>
          </div>
        </div>
        <div className="rightContents">
          <RightNavi />
          <div className="rightContentsItems">
            <FontAwesomeIcon
              icon="comments"
              onClick={() => rightNaviOpen(`${MESSAGE}`)}
            />
          </div>
          <div className="rightContentsItems">
            <FontAwesomeIcon
              icon="question-circle"
              onClick={() => rightNaviOpen(`${HELP}`)}
            />
          </div>
          <div className="rightContentsItems">
            {imgPath["small"] ? (
              <img
                onClick={() => rightNaviOpen(`${ACCOUNT}`)}
                className="profile"
                src={`${imgPath["small"]}`}
                alt="profile"
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Header = lifecycleHook<HeaderProps>(Component, {
  didMount: (props: HeaderProps) => {
    props.dataFetch();
  }
});
