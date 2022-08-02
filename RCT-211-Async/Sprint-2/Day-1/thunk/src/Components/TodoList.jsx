import React from "react";

const TodoList = ({ items }) => {
  return (
    <div>
      {items.map((i) => {
        return (
          <div key={i.id}>
            <p>{i.task}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
