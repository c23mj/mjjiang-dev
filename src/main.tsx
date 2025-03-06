import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <App/>
      <Analytics />
    </Router>
  </React.StrictMode>
);
