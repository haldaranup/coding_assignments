import React, { useState, useEffect, useRef } from "react";

export default function Stopwatch() {
	const [time, setTime] = useState(0);
	const [timerOn, setTimerOn] = useState(false);

	const ref = useRef(null);

	useEffect(() => {
		if (timerOn) {
			ref.current = setInterval(() => {
				setTime((prev) => prev + 10);
			}, 10);
		} else {
			clearInterval(ref.current);
		}
		return () => {
			clearInterval(ref.current);
		};
	}, [timerOn]);

	return (
		<div>
			<span>{("0" + Math.floor((time / 3600000) % 60)).slice(-2)}h:</span>

			<span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}m:</span>
			<span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}s:</span>
			<span>{("0" + ((time / 10) % 100)).slice(-2)}ms</span>
			<br />
			<br />
			{!timerOn && time < 1 && (
				<button
					onClick={() => {
						setTimerOn(true);
					}}>
					Start
				</button>
			)}
			{timerOn && (
				<button
					onClick={() => {
						setTimerOn(false);
					}}>
					{" "}
					Stop
				</button>
			)}
			{!timerOn && time > 0 && (
				<button
					onClick={() => {
						setTimerOn(true);
					}}>
					{" "}
					Resume
				</button>
			)}
			{!timerOn && time > 0 && (
				<button
					onClick={() => {
						clearInterval(ref.current);
						setTime(0);
					}}>
					Reset
				</button>
			)}
		</div>
	);
}
