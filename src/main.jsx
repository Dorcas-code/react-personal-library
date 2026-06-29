import React from "react";
import ReactDOM from "react-dom/client";


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";
// We have different routers for app types


createRoot(document.getElementById("root")).render(
  <StrictMode>

      <App />

  </StrictMode>
);
