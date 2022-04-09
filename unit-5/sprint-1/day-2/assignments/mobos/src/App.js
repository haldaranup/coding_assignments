import React from "react";
import Heading from "./Heading";
import "./App.css";
import Mac from "./Mac";

const oSystem = ["Android", "Blackberry", "iPhone", "Windows Phone"];
const manufac = ["Samsung", "HTC", "Micromax", "Apple"];


function App() {
  return (
    <div className="App">
      <Heading heading="Mobile Operating System" />
      <ul>{oSystem.map((e)=>{
        return <Mac mobile={e} />
      })}</ul>

      <Heading heading="Mobile Manufacturer" />
      <ul>{manufac.map((e)=>{
        return <Mac mobile={e} />
      })}</ul>
    </div>
  );
}

export default App;