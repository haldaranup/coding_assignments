import { useEffect, useState } from "react";

export const Timer = () => {
  const [val, setVal] = useState(0);
  const [timeon, setTime] = useState(false);

  var id;

  useEffect(() => {
    if (timeon) {
      id = setInterval(() => {
        if (val === 0) {
          return;
        }

        setVal(val - 1);
        console.log(val);
      }, 1000);
    }

    return () => clearInterval(id);
  });

  function start() {
    setTime(true);
  }

  function stop() {
    setTime(false);
  }

  function resume() {
    setTime(true);
  }

  return (
    <div>
      <input
        placeholder="add time"
        onChange={(e) => setVal(e.target.value)}
      ></input>
      <button onClick={() => start()}>
        Start
      </button>
      <button onClick={() => stop()}>Stop</button>
      <button onClick={() => resume()}>Resume</button>
      <div>
        <h1>{val}</h1>
      </div>
    </div>
  );
};
