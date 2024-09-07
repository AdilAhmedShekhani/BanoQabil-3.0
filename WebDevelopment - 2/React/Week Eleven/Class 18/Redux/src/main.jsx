import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// Install React redux for using provider
import { Provider } from "react-redux";

import { store } from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* app have acccess to store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
