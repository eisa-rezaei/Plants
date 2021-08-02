import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ToogleProvider } from "./AllContextes/toggle-bg-Context";

ReactDOM.render(
  <React.StrictMode>
    <ToogleProvider>
      <App />
    </ToogleProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
