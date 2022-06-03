
import { useState } from "react";

export const SearchBox = ({ handleClick }) => {
    const [text, setText] = useState("");
    return (
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)}></input>
        <button onClick={() => handleClick(text)}>Search</button>
      </div>
    );
  };
  