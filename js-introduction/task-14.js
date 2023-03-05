const genObject = (arr) => {
	const newArrayToObj = {};

	for (let i = 1; i < arr.length; i += 2) {
		newArrayToObj[arr[i - 1]] = arr[i];
	}

	return newArrayToObj;
};

console.log(
	"task-14: ",
	genObject(["name", "Pesho", "age", "23", "gender", "male"])
);
