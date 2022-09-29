import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleTesla = () => {
    navigate("/tesla");
  };
  const handleAdmin = () => {
    navigate("/admin");
  };
  return (
    <div className="home">
      <Button onClick={handleTesla}>Tesla</Button>
      <Button onClick={handleAdmin}>Admin</Button>
    </div>
  );
};

export default Home;
