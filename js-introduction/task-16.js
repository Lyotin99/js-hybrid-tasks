const calc = (arr) => {
	const [number1, number2, sign] = arr;

	switch (sign) {
		case "+":
			return parseFloat(number1) + parseFloat(number2);
		case "-":
			return parseFloat(number1) - parseFloat(number2);
		case "*":
			return parseFloat(number1) * parseFloat(number2);
		case "/":
			return parseFloat(number1) / parseFloat(number2);
		default:
			break;
	}
};

console.log("task-16: ", calc(["18", "-1", "*"]));
