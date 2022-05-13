import React from "react";

export default function TodoItem({ todo, handleStatus, handleDelete }) {
	console.log(todo);
	return (
		<div>
			<h3>
				<input
					type="checkbox"
					onClick={() => {
						handleStatus(todo.id);
					}}
				/>
				{todo.title}

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
