import React, { useState } from "react";
import CompleteTodos from "./CompleteTodos";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";

export default function Todo() {
	const [data, setData] = useState([]);
	const [complete, setComplete] = useState([]);
	const getData = (value) => {
		const payload = { title: value, status: false, id: Date.now() };
		setData([...data, payload]);
	};

	const handleStatus = (id) => {
		setData(data.map((e) => (e.id === id ? { ...e, status: !e.status } : e)));
	};
	const handleDelete = (id) => {
		setData(data.filter((e) => e.id !== id));
	};

	const completeTodo = () => {
		const newData = data.filter((e) => e.status === true);
		setComplete(newData);
	};

	const handleDeleteComplete = (id) => {
		setComplete(complete.filter((e) => e.id !== id));
	};
	// console.log(complete);

	return (
		<div>
			{data
				.filter((e) => e.status === false)
				.map((e, i) => {
					return (
						<TodoItem
							key={e.id}
							todo={e}
							handleStatus={handleStatus}
							handleDelete={handleDelete}
						/>
					);
				})}
			<TodoList getData={getData} />
			<br />
			<button
				onClick={() => {
					completeTodo();
				}}>
				{" "}
				SHOW COMPLETED TO-DOS
			</button>
			{complete.map((e) => (
				<CompleteTodos
					key={e.id}
					e={e}
					handleDeleteComplete={handleDeleteComplete}
					handleDelete={handleDelete}
				/>
			))}
		</div>
	);
}
