import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Contador from "./components/contador";
import Calculadora from "./components/Calculadora";

ReactDOM.render(
  <div>
    <Calculadora />
    <Contador />
    <Contador />
  </div>,
  document.getElementById("root")
);
