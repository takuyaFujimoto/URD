type errorCode = { [key: string]: string };

export const ERROR_CODE: errorCode = {
  E001: "ログインIDかパスワードが間違っています",
  E002: "勤怠データがありません作成してください。",
  E999: "コネクションエラー（管理者に問い合わせて下さい）"
};
