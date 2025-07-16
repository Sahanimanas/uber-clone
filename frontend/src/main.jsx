import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import UserContext from "./context/usercontext.jsx";

createRoot(document.getElementById("root")).render(
  <UserContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserContext>
);
