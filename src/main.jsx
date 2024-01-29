import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { MaterialUIControllerProvider } from "./context/index.jsx";

let basename = "";
if (window.location.pathname.includes("sales")) basename = "sales";
else if (window.location.pathname.includes("cs")) basename = "cs";
else if (window.location.pathname.includes("theme")) basename = "theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter basename={basename}>
      <MaterialUIControllerProvider>
        <App />
      </MaterialUIControllerProvider>
    </BrowserRouter>
  </>
);

// import React from "react";
// import { createRoot } from "react-dom/client";
// import App from "App";

// // Balance Nutrition React Context Provider
// import { MaterialUIControllerProvider } from "src/context";

// const container = document.getElementById("app");
// const root = createRoot(container);

// let basename = "";
// if (window.location.pathname.includes("sales")) basename = "sales";
// else if (window.location.pathname.includes("cs")) basename = "cs";

// root.render(
//   <BrowserRouter basename={basename}>
//     <MaterialUIControllerProvider>
//       <App />
//     </MaterialUIControllerProvider>
//   </BrowserRouter>
// );
