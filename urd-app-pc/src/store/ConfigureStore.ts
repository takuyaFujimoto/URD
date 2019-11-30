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
import { Store, reducer } from "../modules/index";

export const configureStore = (history: History) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = reduxCreateStore(
    combineReducers<Store>({
      router: connectRouter(history),
      ...reducer
    }),
    applyMiddleware(sagaMiddleware, logger)
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
