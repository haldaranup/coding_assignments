import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {store} from "./State/store"
console.log(store.getState())

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
