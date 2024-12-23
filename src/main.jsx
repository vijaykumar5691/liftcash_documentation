import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ToggleContext } from "./helper/ContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <ToggleContext>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </ToggleContext>
);
