import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import userContext from "./context/usercontext.jsx";

createRoot(document.getElementById("root")).render(
  <userContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </userContext>
);
