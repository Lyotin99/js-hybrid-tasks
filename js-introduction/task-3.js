const letterInString = (arr) => {
	const regex = new RegExp(arr[1], "g");

	return arr[0] ? arr[0].match(regex).length : 0;
};

console.log("task-3: ", letterInString(["hello", "l"]));
