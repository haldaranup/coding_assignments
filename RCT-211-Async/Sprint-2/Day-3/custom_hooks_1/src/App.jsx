import { useState } from "react";
import "./App.css";
import useFetch from "./Hooks/useFetch";
import { useTimeout } from "./Hooks/useTimeout";

function App() {
  const isReady = useTimeout(5000);
  const { loading, data, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  return (
    <div className="App">
      {isReady && " ready"}
      {!isReady && " not ready"}
      {loading && " Loading"}
      {error
        ? "Error"
        : data?.map((i) => {
            return (
              <div key={i.id}>
                Task: {i.title}
                Status: {i.completed ? " Completed" : "Not completed"}
              </div>
            );
          })}
    </div>
  );
}

export default App;
