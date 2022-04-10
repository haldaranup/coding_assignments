import React from "react";
import Contact from "./components/contact";
import Logo from "./components/logo"
import Links from "./components/links"
import "./styles.css";

export default function App() {
  return (
    <div className="App">
    <Logo />
    <Links />
    <Contact />
    </div>
  );
}


