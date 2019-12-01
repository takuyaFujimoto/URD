import { SampleState, sampleReducer } from "./sample/SampleReducer";
import { AppState, appReducer } from "./app/AppReducer";
import { LoginState, loginReducer } from "./login/LoginReducer";
import { HeaderState, headerReducer } from "./header/HeaderReducer";

export type Store = {
  router: any;
  sample: SampleState;
  app: AppState;
  login: LoginState;
  header: HeaderState;
};

export const reducer = {
  sample: sampleReducer,
  app: appReducer,
  login: loginReducer,
  header: headerReducer
};
