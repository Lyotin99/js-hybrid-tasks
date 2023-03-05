const sumString = (arr) => {
	return arr.reduce((prev, curr) => prev + parseFloat(curr), 0);
};

console.log("task-1: ", sumString(["2", "3", "4"]));
