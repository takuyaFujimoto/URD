import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { configureStore as createStore } from "./store/ConfigureStore";
import App from "./containers/app/App";
import Login from "./containers/login/Login";
import Auth from "./components/common/Auth";
import Sample from "./containers/sample/Sample";
import * as serviceWorker from "./serviceWorker";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faKey,
  faEnvelope,
  faQuestionCircle,
  faComments
} from "@fortawesome/free-solid-svg-icons";

const history = createBrowserHistory();
const store = createStore(history);
library.add(faKey, faEnvelope, faQuestionCircle, faComments);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Auth>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/sample" component={Sample} />
          </Switch>
        </Auth>
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
