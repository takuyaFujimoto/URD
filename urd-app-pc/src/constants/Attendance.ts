export const ATTENDANCE_TABLE_HEADER_NAME: {
  [key: string]: { [key: string]: string };
} = {
  day: { index: "1", value: "日付" },
  from: { index: "2", value: "出勤時刻" },
  to: { index: "3", value: "退勤時刻" },
  break_time: { index: "4", value: "休憩" },
  total: { index: "5", value: "勤務時間" },
  comment: { index: "6", value: "備考" },
  edit: { index: "7", value: "編集" }
};

export const EXCLUDE_TABLE_HEADER_NAME: string[] = [
  "day_of_the_week",
  "is_holiday"
];
