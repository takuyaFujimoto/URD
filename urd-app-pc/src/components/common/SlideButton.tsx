import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import "../../css/SlideButton.scss";

type SlideButtonProps = {
  leftIcon: IconProp;
  rightIcon: IconProp;
};

const SlideButton: React.FC<SlideButtonProps> = props => {
  return (
    <div className="SlideButton">
      <FontAwesomeIcon icon={props.leftIcon} className="buttonIcon" />
      <label className="switchLabel">
        <input type="checkbox" className="switchInput" />
        <span className="switchContent"></span>
        <span className="switchCircle"></span>
      </label>
      <FontAwesomeIcon icon={props.rightIcon} className="buttonIcon" />
    </div>
  );
};

export default SlideButton;
