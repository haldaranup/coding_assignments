// import " ./App.css";

import { Routes, Route } from "react-router-dom";



import { AuthContextProvider } from "./contexts/AuthContext";
import {PrivateComponent} from "./components/PrivateComponent"
import {RegisterPageOne} from "./components/RegisterPageOne"
import {Dashboard} from "./components/Dashboard"
import { RegisterPageTwo } from "./components/RegisterPageTwo";

function App(){
return (
<div className= "App">

<AuthContextProvider>

<Routes>
<Route path="/" element={< RegisterPageOne/>}></Route>
<Route path="/registerpageone" element={< RegisterPageOne/>}></Route>

<Route path="/dashboard" element={
    <PrivateComponent>
<Dashboard />
</PrivateComponent>
}></Route>

<Route path="/registerpagetwo" element={<RegisterPageTwo />}></Route>


</Routes>
</AuthContextProvider>
</div>
)
}
export default App;