const evenUnevenNumbers = (number) => {
	if (number % 1 !== 0) {
		return "Invalid";
	}

	return number % 2 === 0 ? "Even" : "Odd";
};

console.log("task-11: ", evenUnevenNumbers(121));
