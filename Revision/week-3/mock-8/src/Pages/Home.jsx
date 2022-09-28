import { Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Signup from "../Components/Signup";
import "../Styles/home.css";

const Home = () => {
  return (
    <div className="home">
      <Link to={"/login"}>
        <Button
          size="md"
          height="50px"
          width="200px"
          border="2px"
          colorScheme="teal"
          borderColor="teal"
        >
          Admin
        </Button>
      </Link>

      <Link to={"/signup"}>
        <Button
          size="md"
          height="50px"
          width="200px"
          border="2px"
          colorScheme="twitter"
          borderColor="twitter"
        >
          User
        </Button>
      </Link>
    </div>
  );
};

export default Home;
