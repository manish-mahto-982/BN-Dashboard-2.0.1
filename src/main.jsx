import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { MaterialUIControllerProvider } from "./context/index.jsx";
import { Provider } from "react-redux";
import store from "./app/store.js";
let basename = "";
if (window.location.pathname.includes("sales")) basename = "sales";
else if (window.location.pathname.includes("cs")) basename = "cs";
else if (window.location.pathname.includes("theme")) basename = "theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter basename={basename}>
      <MaterialUIControllerProvider>
        <App />
      </MaterialUIControllerProvider>
    </BrowserRouter>
  </Provider>
);
