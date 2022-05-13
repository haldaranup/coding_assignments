import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../Redux/action';

const Todo = () => {
    const dispatch = useDispatch();
    const todo = useSelector((store) => store.todo);
    const [text, setText] = useState({
        title: '',
    }
    );
    function handleChange(e) {
        const { id, value } = e.target;

        setText({
            ...text,
            [id]: value
        })

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(
            addTodo({
                title: text,
                status: false,
            })
        )
        fetch("http://localhost:8080/restro", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            }
            ,
            body: JSON.stringify(Data),
        })
  return (
            <div>
                <form onSubmit={handleSubmit}>
                    <input id="Title" onChange={handleChange} placeholder="Dish Name " type="text" />
                    <br />
                    <input className="button" type="submit" value="Submit" />
                </form>

            </div>
        )
  }}

    export { Todo };