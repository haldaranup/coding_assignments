import React, { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  if(count < 0){
    count = 0;
  }
  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }
  function double() {
    setCount(count * 2);
  }
  function color() {
    if (count % 2 === 0) {
      return "green";
    } else return "red";
  }

  return (
    <div className="App">
      <h1 className={color()}>{count}</h1>
      <button className="btn" onClick={increase}>
        +
      </button>
      <button className="btn" onClick={decrease}>
        -
      </button>

      <button className="dbl btn" onClick={double}>
        Double
      </button>
    </div>
  );
}
export default Counter;
