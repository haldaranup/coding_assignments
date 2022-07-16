import React, { useState } from "react";
import Button from "./Button";
import Count from "./Count";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClick = (value: number) => {
    setCount(count + value);
  };
  return (
    <div className="mainContainer">
      <Count label={`Count: ${count}`} />
      <Button label="Add" handleClick={() => handleClick(1)}></Button>
      <Button label="Reduce" handleClick={() => handleClick(-1)}></Button>
    </div>
  );
};

export default Counter;
