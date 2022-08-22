import React from "react";
import Sidebar from "../Components/Sidebar";
import Productpage from "./Productpage";

const Homepage = () => {
  //Do not modify anything in this file
  return (
    <div style={{ display: "flex" }} className="home">
      <Sidebar />
      <Productpage />
    </div>
  );
};

export default Homepage;
