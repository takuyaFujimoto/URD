import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { connectRouter } from "connected-react-router";
import { History } from "history";
import rootSaga from "../controllers/index";
// TODO 増えた時ようにindexに纏められないか検証
import { SampleState, sampleReducer } from "../modules/sample/SampleReducer";

// TODO routerの部分
export type AppState = {
  router: any;
  sample: SampleState;
};

export const configureStore = (history: History) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = reduxCreateStore(
    combineReducers<AppState>({
      router: connectRouter(history),
      sample: sampleReducer
    }),
    applyMiddleware(sagaMiddleware, logger)
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
