import { Container } from "@chakra-ui/react";
import "./App.scss";
import MainRoutes from "./Pages/mainRoutes";

function App() {
  return (
    <Container minWidth={"6xl"}>
      <MainRoutes />
    </Container>
  );
}

export default App;
