import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router";
import { createBrowserHistory } from "history";
import { configureStore as createStore } from "./store/ConfigureStore";
import App from "./components/App";
import Sample from "./containers/sample/Sample";
import "./css/index.scss";
import * as serviceWorker from "./serviceWorker";

const history = createBrowserHistory();
const store = createStore(history);

// TODO Appの部分をAuthに変更
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/sample" component={Sample} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
