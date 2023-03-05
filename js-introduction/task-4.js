const figureArea = (arr) => {
	const w1 = parseInt(arr[0]);
	const h1 = parseInt(arr[1]);
	const w2 = parseInt(arr[2]);
	const h2 = parseInt(arr[3]);

	if (w1 > w2) {
		if (h1 >= h2) {
			return w1 * h1;
		} else {
			return (w1 - w2) * h1 + w2 * h2;
		}
	} else {
		if (h1 > h2) {
			return (w2 - w1) * h2 + w1 * h1;
		} else {
			return w2 * h2;
		}
	}
};

console.log("task-4: ", figureArea(["2", "4", "5", "4"]));
