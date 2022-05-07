import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

// if (!prev.hours || !prev.seconds || !prev.minutes) {
// 	clearInterval(ref.current);
// } else {
// {...prev,
// 	seconds: (parseInt(prev.seconds) % 60) - 1,
// 	minutes: ((parseInt(prev.minutes) * 60) % 60) - 1,
// 	hours: ((parseInt(prev.hours) * 60 * 60) % 60) - 1,
// };
