import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../css/attendance/AttendanceEditModal.scss";

type AttendanceEditModalProps = {
  item: { [key: string]: string | boolean };
  newFrom: string;
  newTo: string;
  newBreakTime: string;
  modalClose: () => void;
};

export const AttendanceEditModal: React.FC<
  AttendanceEditModalProps
> = props => {
  const { item, newFrom, newTo, newBreakTime, modalClose } = props;
  const {
    break_time: breakTime,
    day_of_the_week: dayOfTheWeek,
    comment,
    from,
    is_holiday: isHolidy,
    to,
    day,
    total
  } = item;
  const title: () => JSX.Element = () => {
    if (isHolidy || dayOfTheWeek === "日") {
      return (
        <h2>
          {`${day}`}(<span className="isHolidy">{`${dayOfTheWeek}`}</span>)
        </h2>
      );
    }
    if (dayOfTheWeek === "土") {
      return (
        <h2>
          {`${day}`}(<span className="isSaturday">{`${dayOfTheWeek}`}</span>)
        </h2>
      );
    }
    return (
      <h2>
        {`${day}`}(<span>{`${dayOfTheWeek}`}</span>)
      </h2>
    );
  };
  return (
    <div className="AttendanceEditModal">
      <div className="modalWrapper">
        <div className="modalHeader">
          {title()}
          <div className="closeButton">
            <span onClick={() => modalClose()}></span>
          </div>
        </div>
        <div className="modalMain">
          <div className="item">
            <label htmlFor="from">
              <FontAwesomeIcon icon="clock" />
            </label>
            <input
              value={newFrom ? newFrom : String(from)}
              type="text"
              name="from"
              required={true}
              readOnly={true}
              placeholder="開始時間"
              // onChange={e => inputLoginId(e.target.value)}
            ></input>
          </div>
          <div className="item">
            <label htmlFor="to">
              <FontAwesomeIcon icon="clock" />
            </label>
            <input
              value={newTo ? newTo : String(to)}
              type="text"
              name="to"
              required={true}
              readOnly={true}
              placeholder="終了時間"
              // onChange={e => inputLoginId(e.target.value)}
            ></input>
          </div>
          <div className="item">
            <label htmlFor="breakTime">
              <FontAwesomeIcon icon="clock" />
            </label>
            <input
              value={newBreakTime ? newBreakTime : String(breakTime)}
              type="text"
              name="breakTime"
              required={true}
              readOnly={true}
              placeholder="休憩時間"
              // onChange={e => inputLoginId(e.target.value)}
            ></input>
          </div>
          <div className="item">
            <textarea value={""} name="comment" placeholder="備考"></textarea>
          </div>
          <div className="buttonWrapper">
            <button type="button" onClick={() => alert("実装中")}>
              保存
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
