import React from "react";
import { lifecycleHook } from "../common/LifecycleHook";
import "../../css/Sample.scss";

type SampleProps = {
  isFetch: boolean | null;
  items: string[];
  addItemValue: string;
  deleteItemValue: string;
  inputText: (x: string) => void;
  changePullDown: (x: string) => void;
  insertItem: (x: string) => void;
  deleteItem: (x: string) => void;
  dataFetch: () => void;
};

const Component: React.FC<SampleProps> = props => {
  const {
    isFetch,
    items,
    addItemValue,
    deleteItemValue,
    inputText,
    changePullDown,
    insertItem,
    deleteItem
  } = props;
  const viewItems: object = items.map((x, i) => <p key={i}>{x}</p>);
  const options: object = [
    <option value={""} key={-1}>
      {""}
    </option>
  ].concat(
    items.map((x, i) => (
      <option value={x} key={i}>
        {x}
      </option>
    ))
  );
  // TODO プログレスバーに変更
  if (isFetch) return <div>読み込み中・・・</div>;
  return (
    <div className="Sample">
      <h1>React + Redux + Saga + FireBase + TypeScriptのサンプル</h1>
      <div className="viewArea">{viewItems}</div>
      <div className="deleteArea">
        <select
          onChange={e => changePullDown(e.target.value)}
          defaultValue={""}
        >
          {options}
        </select>
        <button type="button" onClick={() => deleteItem(deleteItemValue)}>
          remove
        </button>
      </div>
      <div className="addArea">
        <input
          type="text"
          onChange={e => inputText(e.target.value)}
          value={addItemValue}
        />
        <button type="button" onClick={() => insertItem(addItemValue)}>
          ADD
        </button>
      </div>
    </div>
  );
};

// LifecycleMethodを使用する場合のサンプル
export const Sample = lifecycleHook<SampleProps>(Component, {
  didMount: (props: SampleProps) => {
    props.dataFetch();
  }
});
