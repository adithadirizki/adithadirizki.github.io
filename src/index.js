import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ThemeProvider from "./utils/ThemeProvider";

ReactDOM.render(
  <>
    <ThemeProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </>,
  document.getElementById("root")
);
