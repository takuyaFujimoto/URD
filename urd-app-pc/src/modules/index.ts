import { SampleState, sampleReducer } from "./sample/SampleReducer";
import { AppState, appReducer } from "./app/AppReducer";
import { LoginState, loginReducer } from "./login/LoginReducer";
import { HeaderState, headerReducer } from "./header/HeaderReducer";
import {
  RightNaviState,
  rightNaviReducer
} from "./sideNavi/rightNavi/RightNaviReducer";
import {
  LeftNaviState,
  leftNaviReducer
} from "./sideNavi/leftNavi/LeftNaviReducer";
import {
  AttendanceState,
  attendanceReducer
} from "./attendance/AttendanceReducer";
import {
  AttendanceEditModalState,
  attendanceEditModalReducer
} from "./attendance/AttendanceEditModalReducer";

export type Store = {
  router: any;
  sample: SampleState;
  app: AppState;
  login: LoginState;
  header: HeaderState;
  rightNavi: RightNaviState;
  leftNavi: LeftNaviState;
  attendance: AttendanceState;
  attendanceEditModal: AttendanceEditModalState;
};

export const reducer = {
  sample: sampleReducer,
  app: appReducer,
  login: loginReducer,
  header: headerReducer,
  rightNavi: rightNaviReducer,
  leftNavi: leftNaviReducer,
  attendance: attendanceReducer,
  attendanceEditModal: attendanceEditModalReducer
};
