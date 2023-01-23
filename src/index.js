import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Weather from "./Weather";
import Footer from "./Footer";

import "./Weather.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <Weather />
      <Footer />
    </div>
  </StrictMode>
);
