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
  const viewItems: object = items.map((x, i) => <li key={i}>{x}</li>);
  const options: object = [
    <option value={""} key={-1}>
      消したいアイテムを選択
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
      <h1>React + Redux + Saga + Scss + FireBase + TypeScriptのサンプル</h1>
      <div className="contentArea">
        <div className="actionArea">
          <a
            href="https://console.firebase.google.com/u/1/project/urd-app-pc-v1/overview"
            target="_blank"
            rel="noreferrer noopener"
          >
            ▶︎ データ確認用 firebase console
          </a>
          <div className="add">
            <input
              type="text"
              placeholder="追加するアイテム名を記述"
              onChange={e => inputText(e.target.value)}
              value={addItemValue}
            />
            <button
              type="button"
              onClick={() => insertItem(addItemValue)}
              disabled={!addItemValue ? true : false}
            >
              ADD
            </button>
          </div>
          <div className="delete">
            <div className="deleteMenu innerLayout">
              <select
                onChange={e => changePullDown(e.target.value)}
                defaultValue={""}
              >
                {options}
              </select>
            </div>
            <button type="button" onClick={() => deleteItem(deleteItemValue)}>
              REMOVE
            </button>
          </div>
        </div>
        <div className="viewArea">
          <ul>{viewItems}</ul>
        </div>
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
