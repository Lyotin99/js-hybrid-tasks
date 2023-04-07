const inputs = document.querySelectorAll(".task1 input");

const btn = document.querySelector("input[type=button]");
const inputX = inputs[0];
const inputY = inputs[1];
let res = inputs[2];

btn.addEventListener("click", () => {
	const fieldOne = parseInt(inputX.value) || 0;
	const fieldTwo = parseInt(inputY.value) || 0;

	res.value = fieldOne + fieldTwo;
});
