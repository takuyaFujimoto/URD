import dayjs from "dayjs";
import "dayjs/locale/ja";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.locale("ja");
dayjs.extend(relativeTime);

export class TimeOperation {
  dayjs: dayjs.Dayjs;
  constructor() {
    this.dayjs = dayjs();
  }

  currentDateObj() {
    return this.dayjs;
  }

  // yyyy-mm-dd
  currentDate() {
    const year: string = `${this.dayjs.year()}`;
    const month: string =
      this.dayjs.month() + 1 < 10
        ? `0${this.dayjs.month() + 1}`
        : `${this.dayjs.month() + 1}`;
    const day: string =
      this.dayjs.date() < 10 ? `0${this.dayjs.date()}` : `${this.dayjs.date()}`;

    return `${year}-${month}-${day}`;
  }

  currentYear() {
    return `${this.dayjs.year()}`;
  }

  currentMonth() {
    if (this.dayjs.month() + 1 < 10) {
      return `0${this.dayjs.month() + 1}`;
    } else {
      return `${this.dayjs.month() + 1}`;
    }
  }

  currentDay() {
    if (this.dayjs.date() < 10) {
      return `0${this.dayjs.date()}`;
    } else {
      return `${this.dayjs.date()}`;
    }
  }

  // Attendの前後月算出用
  // nケ月前の計算
  prevYM(y: string, m: string, n: number) {
    if (n === 12) return { year: String(Number(y) - 1), month: m };
    if (n < 12) {
      const prevM: number = Number(m) - n;
      if (prevM === 0) return { year: String(Number(y) - 1), month: "12" };
      if (prevM > 0) {
        const x: string = prevM < 10 ? `0${prevM}` : String(prevM);
        return { year: y, month: x };
      }
      const x: string =
        Math.abs(prevM) < 10 ? `0${Math.abs(prevM)}` : String(Math.abs(prevM));
      return { year: String(Number(y) - 1), month: x };
    }
    const prevY: number = Math.trunc(n / 12);
    const prevM: number = n % 12;
    if (prevM === 0) return { year: String(Number(y) - prevY), month: m };
    const x: number = Number(m) - prevM;
    if (x === 0) return { year: String(Number(y) - prevY - 1), month: "12" };
    if (x > 0) {
      const xx: string = x < 10 ? `0${x}` : String(x);
      return { year: String(Number(y) - prevY), month: xx };
    }
    const xx: string =
      Math.abs(x) < 10 ? `0${Math.abs(x)}` : String(Math.abs(x));
    return { year: String(Number(y) - prevY - 1), month: xx };
  }

  // nケ月後の計算
  nextYM(y: string, m: string, n: number) {
    if (n === 12) return { year: String(Number(y) + 1), month: m };
    if (n < 12) {
      const nextM: number = Number(m) + n;
      if (nextM === 13) return { year: String(Number(y) + 1), month: "01" };
      if (nextM < 13) {
        const x: string = nextM < 10 ? `0${nextM}` : String(nextM);
        return { year: y, month: x };
      }
      const xx: number = Number(m) + nextM - 12;
      const x: string = xx < 10 ? `0${xx}` : String(xx);
      return { year: String(Number(y) + 1), month: x };
    }
    const nextY: number = Math.trunc(n / 12);
    const nextM: number = n % 12;
    if (nextM === 0) return { year: String(Number(y) + nextY), month: m };
    const x: number = Number(m) + nextM;
    if (x === 13) return { year: String(Number(y) + nextY + 1), month: "01" };
    if (x < 13) {
      const xx: string = x < 10 ? `0${x}` : String(x);
      return { year: String(Number(y) + nextY), month: xx };
    }
    const xx: number = (Number(m) + x) % 12;
    const xxx: string = xx < 10 ? `0${xx}` : String(xx);
    return { year: String(Number(y) + nextY + 1), month: xxx };
  }

  // 文字列のHH:mmの差分算出
  // 例 09:00 - 18:30
  calcTime(from: string, to: string, breakTime: string = "00:00") {
    const fromNum: number =
      Number(from.split(":")[0]) * 60 + Number(from.split(":")[1]);
    const toNum: number =
      Number(to.split(":")[0]) * 60 + Number(to.split(":")[1]);
    const breakTimeNum: number =
      Number(breakTime.split(":")[0]) * 60 + Number(breakTime.split(":")[1]);
    const totalNum: number = toNum - fromNum - breakTimeNum; // 48?
    const hh: string =
      Math.trunc(totalNum / 60) < 10
        ? `0${Math.abs(Math.trunc(totalNum / 60))}` // これが1
        : String(Math.trunc(totalNum / 60));
    const mm: string =
      Math.abs(totalNum) - Number(hh) * 60 < 10
        ? `0${Math.abs(Math.abs(totalNum) - Number(hh) * 60)}`
        : String(Math.abs(totalNum) - Number(hh) * 60);
    const result: string = totalNum < 0 ? `-${hh}:${mm}` : `${hh}:${mm}`;
    return result;
  }
}
