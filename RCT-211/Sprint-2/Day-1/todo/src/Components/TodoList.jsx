import React from "react";
import { Link } from "react-router-dom";

const TodoList = ({ todoList }) => {
  return (
    <div>
      {todoList?.map((i) => {
        return (
          <div key={i.id}>
            <Link to={`/todos/${i.id}`}>
              <div>{i.title}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
