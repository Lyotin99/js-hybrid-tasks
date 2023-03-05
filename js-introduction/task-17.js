const words = (sentence) => {
	return sentence
		.split(/[^0-9A-Za-z]/g)
		.filter((word) => word)
		.map((word) => word.toUpperCase())
		.join(", ");
};

console.log("task-17: ", words("Hi, How are you?"));
