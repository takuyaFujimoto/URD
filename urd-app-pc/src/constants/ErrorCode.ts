type errorCode = { [key: string]: string };

export const ERROR_CODE: errorCode = {
  E001: "ログインIDかパスワードが間違っています",
  E999: "コネクションエラー（管理者に問い合わせて下さい）"
};
