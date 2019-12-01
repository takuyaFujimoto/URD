import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { lifecycleHook } from "../common/LifecycleHook";
import Loding from "../../components/common/Loding";
import "../../css/Header.scss";

type HeaderProps = {
  isFetch: boolean;
  imgPath: { [key: string]: string };
  rightContentsInfo: { name: string; isOpen: boolean };
  rightContentsOpen: (x: string) => void;
  rightContentsClose: () => void;
  dataFetch: () => void;
};

const Component: React.FC<HeaderProps> = props => {
  const {
    isFetch,
    imgPath,
    rightContentsInfo,
    rightContentsOpen,
    rightContentsClose
  } = props;
  const rightContentsItems: string = rightContentsInfo.isOpen
    ? "rightContentsDetail open"
    : "rightContentsDetail";
  return (
    <div className="Header">
      {isFetch ? <Loding /> : null}
      <div className="contentsWrapper">
        <div className="leftContents"></div>
        <div className="rightContents">
          <div className={`${rightContentsItems}`}>
            <div className="rightContentsDetailHeader">
              <h2>{`${rightContentsInfo.name}`}</h2>
              <div className="closeButton">
                <span onClick={() => rightContentsClose()}>×</span>
              </div>
            </div>
          </div>
          <div className="rightContentsItems">
            <FontAwesomeIcon
              icon="comments"
              onClick={() => rightContentsOpen("Message")}
            />
          </div>
          <div className="rightContentsItems">
            <FontAwesomeIcon
              icon="question-circle"
              onClick={() => rightContentsOpen("Help")}
            />
          </div>
          <div className="rightContentsItems">
            {imgPath["small"] ? (
              <img
                onClick={() => rightContentsOpen("Account")}
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
