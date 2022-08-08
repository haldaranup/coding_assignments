import Navbar from "./Components/Navbar";
import MainRoutes from "./Pages/MainRoutes";
import "./App.css";

function App() {
  // DO NOT CHANGE/MODIFY this app-structure here
  return (
    <div data-testid="watch-app">
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;
