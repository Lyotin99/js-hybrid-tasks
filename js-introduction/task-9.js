const triangleArea = (a, b, c) => {
	const p = (a + b + c) / 2;

	return Math.sqrt(p * (p - a) * (p - b) * (p - c));
};

console.log("task-9: ", triangleArea(18, 24, 30));
