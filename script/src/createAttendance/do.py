import calendar
import requests
import json

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# DAOの作成
def create_dao():
  cred = cred = credentials.Certificate(
    "src/createAttendance/serviceAccountKey.json")
  firebase_admin.initialize_app(cred)
  db = firestore.client()
  return db

def get_holidays(year, month):
  api_url = "https://holidays-jp.github.io/api/v1/{0}/date.json"
  url = api_url.format(year)
  response = requests.get(url)
  holidays = json.loads(response.text)
  yyyymm = "{0}-{1}-".format(year, month)
  # 該当月の祝日のみ抽出
  match_holidays = list(filter(lambda x: yyyymm in x, holidays.keys()))
  if len(match_holidays) != 0:
    return list(map(lambda x: x[len(yyyymm):], match_holidays))
  else:
    return []

# 登録アイテムの作成
def create_items(year, month, holidays):
  # 曜日
  week = ["月", "火", "水", "木", "金", "土", "日"]
  week_num, end_of_month = calendar.monthrange(year, month)

  result = []
  for num in range(1, (end_of_month + 1)):
    day = str(num) if 10 <= num else "0" + str(num)
    is_holiday = True if day in holidays else False
    result.append({
      day: {
        "break_time": "01:00",
        "day_of_the_week": week[week_num],
        "from": "00:00",
        "to": "00:00",
        "is_holiday": is_holiday,
        "comment": "-"
      }
    })
    week_num = week_num + 1 if week_num < 6 else 0
  return result

# mainロジック
if __name__ == "__main__":
  f = open("src/createAttendance/setting.json", "r")
  json_data = json.load(f)
  uid = json_data["uid"]
  year = json_data["year"]
  month = json_data["month"]
  holidays = get_holidays(year, month)
  items = create_items(int(year), int(month), holidays)
  dao = create_dao()
  doc_ref = dao.collection("attendance").document(
    uid).collection(year).document(month)
  for item in items:
    doc_ref.set(item, merge=True)
  print("finish")
