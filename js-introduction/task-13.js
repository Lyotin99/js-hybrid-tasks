const distance = (arr) => {
	const [v1, v2, t] = arr;
	const v1Ms = v1 / 3.6;
	const v2Ms = v2 / 3.6;

	return Math.abs(v1Ms * t - v2Ms * t).toFixed(2) + "m";
};

console.log("task-13 ", distance([20, 10, 20]));
