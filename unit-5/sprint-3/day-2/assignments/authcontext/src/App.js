import "./App.css";
import { Navbar } from "./Components/Navbar";
// import { Card } from "./Components/Body/Card";
import {AuthContext} from "./Contexts/AuthContext"
import {useContext} from "react";
function App() {
  const { handleAuth } = useContext(AuthContext);
 
return (
  <>
   <button
     onClick={() => {
      handleAuth();}}>
      Register
      </button>

<Navbar />

</>
);
}
export default App;