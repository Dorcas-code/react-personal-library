import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from 'react-router-dom'; 
import "./index.css";
import App from "./App.jsx";
// We have different routers for app types
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
 <HashRouter>
      <App />
</HashRouter>
  </StrictMode>
);
