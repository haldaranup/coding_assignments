import React, { useRef, useState, useEffect } from "react";

export default function Timer() {
	const [time, setTime] = useState({ seconds: "", minutes: "", hours: "" });
	const [timerOn, setTimerOn] = useState(false);

	const ref = useRef();

	const handleChange = (e) => {
		const { value } = e.target;
		if (value.length === 2 && (!time.seconds || !time.minutes)) {
			if (!time.seconds) {
				setTime({ ...time, seconds: value });
			} else if (time.seconds) {
				setTime({ ...time, minutes: value });
			}
		} else if (time.seconds && time.minutes) {
			setTime({ ...time, hours: value });
		}
	};

	console.log(time);

	// setTime((prev) => {
	// 	console.log(typeof parseInt(prev.seconds);
	// });

	useEffect(() => {
		if (timerOn) {
			ref.current = setInterval(() => {
				setTime((prev) => {
					if (
						parseInt(prev.hours) <= (NaN || 0) &&
						parseInt(prev.seconds) <= (NaN || 0) &&
						parseInt(prev.minutes) <= (NaN || 0)
					) {
						clearInterval(ref.current);
					}
					return {
						...prev,
						seconds:
							("0" + Math.floor(parseInt(prev.seconds) % 60)).slice(-2) - 1,
						minutes: ((parseInt(prev.minutes) * 60) % 60) - 1,
						hours: ((parseInt(prev.hours) * 60 * 60) % 60) - 1,
					};
				});
			}, 1000);
		} else {
			clearInterval(ref.current);
		}
		return () => {
			clearInterval(ref.current);
		};
	}, [timerOn, time]);

	return (
		<div>
			<h1>
				{time.hours ? time.hours : "00"} hrs{" "}
				{time.minutes ? time.minutes : "00"}
				mins {time.seconds ? time.seconds : "00"} sec
			</h1>

			<input
				type="number"
				placeholder={
					(!time.seconds && "Enter time in second") ||
					(!time.minutes && "Enter time in minutes") ||
					"Enter time in hours"
				}
				onChange={handleChange}
			/>

			<br />
			<button
				onClick={() => {
					setTimerOn(true);
				}}>
				Start
			</button>
			<button
				onClick={() => {
					setTimerOn(false);
				}}>
				Stop
			</button>
			<button
				onClick={() => {
					setTimerOn(true);
				}}>
				Resume
			</button>
			<button
				onClick={() => {
					clearInterval(ref.current);
					setTime(0);
				}}>
				Reset
			</button>
		</div>
	);
}
