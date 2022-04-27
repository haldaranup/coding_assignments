import {  useState } from "react";
import "./App.css";
import { Button} from "./Components/Button";
function App() {
  const [theme,setTheme] = useState("dark");

return(
<div className="App">




<Button
theme={theme}
 onClick={() => {
   setTheme(theme === "light" ? "dark": "light");
}}
>Change theme 
  <button
theme={theme}
 onClick={() => {
   setTheme(theme === "light" ? "dark": "light");
}}
> {theme}</button>
</Button>

</div>
)
}
export default App;