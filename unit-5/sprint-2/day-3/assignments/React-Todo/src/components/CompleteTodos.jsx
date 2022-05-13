import React from "react";

export default function CompleteTodos({
	e,
	handleDeleteComplete,
	handleDelete,
}) {
	console.log("data:", e);
	return (
		<div>
			<h3 className={`${e.status ? "completed" : null}`}>
				{e && <input type="checkbox" defaultChecked={e.status} />}
				{e.title}
				<button
					onClick={() => {
						handleDeleteComplete(e.id);
						handleDelete(e.id);
					}}>
					Delete
				</button>
			</h3>
		</div>
	);
}
