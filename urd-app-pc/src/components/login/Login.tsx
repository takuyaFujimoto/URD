import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Redirect } from "react-router-dom";
import Cookies from "js-cookie";
import { LOGIN_FLG } from "../../constants/Login";
import { ERROR_CODE } from "../../constants/ErrorCode";
import Loding from "../../components/common/Loding";
import "../../css/Login.scss";

type LoginProps = {
  loginId: string;
  password: string;
  isFetch: boolean;
  userInfo: object;
  errorCd: string | null;
  inputLoginId: (x: string) => void;
  inputLoginPassword: (x: string) => void;
  handleLogin: (id: string, password: string) => void;
};

export const Login: React.FC<LoginProps> = props => {
  const {
    loginId,
    password,
    inputLoginPassword,
    inputLoginId,
    handleLogin,
    errorCd,
    isFetch,
    userInfo
  } = props;
  if (!!Cookies.get(LOGIN_FLG) && Object.keys(userInfo).length !== 0)
    return <Redirect to={"/"} />;
  // if (!isFetch) return <Loding />;
  return (
    <div className="Login">
      {isFetch ? <Loding /> : null}
      <div className="itemWrapper">
        <h1>URD SYSYTEM</h1>
        {errorCd ? <p className="errorText">{ERROR_CODE[errorCd]}</p> : null}
        <div className="item">
          <label htmlFor="email">
            <FontAwesomeIcon icon="envelope" />
          </label>
          <input
            value={loginId}
            type="email"
            name="email"
            required={true}
            placeholder="Email Address"
            onChange={e => inputLoginId(e.target.value)}
          ></input>
        </div>
        <div className="item">
          <label htmlFor="password">
            <FontAwesomeIcon icon="key" />
          </label>
          <input
            value={password}
            type="password"
            name="password"
            required={true}
            placeholder="Password"
            onChange={e => inputLoginPassword(e.target.value)}
          ></input>
        </div>
        <div className="buttonWrapper">
          <button type="button" onClick={() => handleLogin(loginId, password)}>
            ログイン
          </button>
        </div>
        <ul className="formFooter">
          <li onClick={() => alert("未実装")}>新規ユーザー作成</li>
          <li onClick={() => alert("未実装")}>パスワードを忘れた方はこちら</li>
        </ul>
      </div>
    </div>
  );
};
