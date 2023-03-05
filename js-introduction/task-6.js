const printNums = (num) => {
	let nums = "";
	for (let i = 1; i <= num; i++) {
		nums += i;
	}

	return nums;
};

console.log("task-6: ", printNums(100));
