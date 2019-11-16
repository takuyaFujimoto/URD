import React, { ReactNode } from "react";
import { Redirect } from "react-router-dom";
import Cookies from "js-cookie";
import { LOGIN_FLG } from "../../constants/Login";

type AuthProps = {
  children: ReactNode;
};

const Auth: React.FC<AuthProps> = props => {
  // ログインチェック
  const isLogin: boolean = !!Cookies.get(LOGIN_FLG);
  const contents = isLogin ? props.children : <Redirect to={"/login"} />;
  return <div className="Auth">{contents}</div>;
};

export default Auth;
