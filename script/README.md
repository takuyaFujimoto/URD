# 開発で必要なスクリプトはこちらへ

## ▼ 勤怠表の雛形を DB 作成するスクリプト

1. setting.json に uid, year, month（ゼロ埋め）をセット
2. key 情報（serviceAccountKey.json）を用意
3. `pipenv run python3 src/createAttendance/do.py`
