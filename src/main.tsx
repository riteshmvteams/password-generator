import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
// context
import PasswordProvider from "./context/PasswordContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PasswordProvider>
      <App />
    </PasswordProvider>
  </React.StrictMode>
);
