import React, { useState } from "react";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";

export default function Todo() {
	const [data, setData] = useState([]);
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
	return (
		<div>
			{data.map((e, i) => (
				<TodoItem
					key={i}
					todo={e}
					handleStatus={handleStatus}
					handleDelete={handleDelete}
				/>
			))}
			<TodoList getData={getData} />
		</div>
	);
}
