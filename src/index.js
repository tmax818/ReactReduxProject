import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import rootReducer from "./reducers";
import App from "./components/App";
import createStoreWithMiddleware from "./store/configureStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const store = createStoreWithMiddleware(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
