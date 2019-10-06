import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { connectRouter } from "connected-react-router";
import rootSaga from "../controllers/index";
// import reducer from "../modules/index";
import sampleReducer from "../modules/sample/SampleReducer";

export default function configureStore(history: any) {
  const sagaMiddleware = createSagaMiddleware();
  const store = reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      sample: sampleReducer
    }),
    applyMiddleware(sagaMiddleware, logger)
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
