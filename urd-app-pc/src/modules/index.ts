import { SampleState, sampleReducer } from "./sample/SampleReducer";
import { AppState, appReducer } from "./app/AppReducer";
import { LoginState, loginReducer } from "./login/LoginReducer";
import { BaseHeaderState, baseHeaderReducer } from "./header/BaseHeaderReducer";

export type Store = {
  router: any;
  sample: SampleState;
  app: AppState;
  login: LoginState;
  baseHeader: BaseHeaderState;
};

export const reducer = {
  sample: sampleReducer,
  app: appReducer,
  login: loginReducer,
  baseHeader: baseHeaderReducer
};
