import React from 'react'

const TodoList = ({todos}) => {
  return (
    <div>
        <p>{todos.task}</p>
    </div>
  )
}

export default TodoList