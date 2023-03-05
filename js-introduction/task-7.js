const distanceBetweenDots = (arr) => {
	const pointOne = {
		x: parseInt(arr[0]),
		y: parseInt(arr[1]),
	};

	const pointTwo = {
		x: parseInt(arr[2]),
		y: parseInt(arr[3]),
	};

	return Math.sqrt(
		Math.pow(pointTwo.x - pointOne.x, 2) +
			Math.pow(pointTwo.y - pointOne.y, 2)
	);
};

console.log("task-7: ", distanceBetweenDots(["2", "3", "5", "7"]));
