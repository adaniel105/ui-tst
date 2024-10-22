import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import App from "./App.tsx";
//import { AccordionDemo } from "./AccordionDemo.tsx";
import { BonsaiApp } from "./Bonsai.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BonsaiApp />
  </StrictMode>
);
