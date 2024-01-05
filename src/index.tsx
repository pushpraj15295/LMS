import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

declare module ".module.css" {
  
}


const Container: HTMLElement | null = document.getElementById("root");

if (Container) {
  const root = createRoot(Container);
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
} else {
  throw new Error("Target Container is not a dom element");
}
