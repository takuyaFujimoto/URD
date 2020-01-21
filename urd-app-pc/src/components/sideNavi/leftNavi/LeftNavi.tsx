import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  TRELLO_LINK,
  FIREBASE_CONSOLE_LINK,
  GITHUB_LINK,
  PORTAL_LINK,
  SLACK_LINK,
  DRIVE_LINK
} from "../../../constants/SideNavi";
import "../../../css/sideNavi/LeftNavi.scss";

type LeftNaviProps = {
  status: boolean;
};

export const LeftNavi: React.FC<LeftNaviProps> = props => {
  const { status } = props;
  const leftNaviIsOpen: string = status ? "LeftNavi open" : "LeftNavi";
  return (
    <div className={`${leftNaviIsOpen}`}>
      <ul className="linkList">
        <li className="linkItem">
          <a href={`${PORTAL_LINK}`} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon="building" />
            社内ポータル
          </a>
        </li>
        <li className="linkItem">
          <a href={`${TRELLO_LINK}`} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={["fab", "trello"]} />
            タスクボード
          </a>
        </li>
        <li className="linkItem">
          <a
            href={`${FIREBASE_CONSOLE_LINK}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon="terminal" />
            プロジェクト管理画面
          </a>
        </li>
        <li className="linkItem">
          <a href={`${GITHUB_LINK}`} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={["fab", "github"]} />
            ソースブランチ
          </a>
        </li>
        <li className="linkItem">
          <a href={`${SLACK_LINK}`} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={["fab", "slack"]} />
            スラック
          </a>
        </li>
        <li className="linkItem">
          <a href={`${DRIVE_LINK}`} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={["fab", "google-drive"]} />
            チームドライブ
          </a>
        </li>
        <li className="linkItem">
          <Link to="/sample">
            <FontAwesomeIcon icon={["fab", "react"]} />
            サンプル画面
          </Link>
        </li>
      </ul>
    </div>
  );
};
