const sum = (arr) => {
	const sum = arr
		.reduce((prev, curr) => prev + parseFloat(curr), 0)
		.toFixed(2);
	const tax = (sum * 0.2).toFixed(2);
	const taxedSum = (sum - tax).toFixed(2);

	return `The starting sum is: ${sum}. The tax is ${tax}. The taxed sum is ${taxedSum}`;
};

console.log("task-2: ", sum(["10.5", "20.2", "30.2", "40.1"]));
