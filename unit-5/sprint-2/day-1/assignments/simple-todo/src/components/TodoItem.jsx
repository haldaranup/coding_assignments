import React from "react";

export default function TodoItem({ todo, handleStatus, handleDelete }) {
	return (
		<div>
			<h3>
				{todo.title} - status: {todo.status ? "Done" : "Not Done"}
				<button
					onClick={() => {
						handleStatus(todo.id);
					}}>
					Toggle
				</button>
				<button
					onClick={() => {
						handleDelete(todo.id);
					}}>
					Delete
				</button>
			</h3>
		</div>
	);
}
