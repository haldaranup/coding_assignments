
import { useState } from "react";
import "./App.css";
import { Image } from "./Components/Image";
import { Input } from "./Components/Input";
import { useCounter } from "./hooks/useCounter";

function App() {
  /* 
  1. Implement only the hook functionality inside hooks/useCounter.js
  2. Create the custom components, inside the respective files of Image.jsx and Image.jsx
  3. The application should function properly after the implimentation of hooks and Custom components
  */
  const { countValue, incCount, decCount } = useCounter({
    initialValue: 10,
    minValue: 5,
    maxValue: 15,
  });
  const initialVal = "inputTag"

  const [val, setVal] = useState(initialVal || "")
  return (
    <div className="App">
      {/* DO NOT CHANGE the 5 lines below   */}
      <h3>Value: {countValue}</h3>
      <button onClick={() => incCount()}>Increment</button>
      <button onClick={() => incCount(3)}>Increment 3</button>
      <button onClick={() => decCount(2)}>Decrement 2</button>
      <button onClick={() => decCount(4)}>Decrement 4</button>

      <br />
      {/* You can pass the required props as mentioned in the questions to
      check if the components are working properly */}
      <Image src="https://bit.ly/dan-abramov" alt="evalution_3 pic" borderRadius="10px" height="200px" width="200px" fit="cover" />
      <br />
      <Input size="lg" variant="outline" onChange={(e) => setVal(e.target.value)} value={val} />
    </div>
  );
}

export default App;
