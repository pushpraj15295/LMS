import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const Container: HTMLElement | null = document.getElementById("root");

if (Container) {
  const root = createRoot(Container);
  root.render(<App />);
} else {
  throw new Error("Target Container is not a dom element");
}
