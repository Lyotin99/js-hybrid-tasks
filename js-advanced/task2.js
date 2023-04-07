const task2 = document.querySelector(".task2");

const btn = task2.querySelector("input[type=button]");
const items = task2.querySelector("#items");

btn.addEventListener("click", () => {
	const textInput = task2.querySelector("#newItemText").value;

	if (!textInput.trim()) return;

	items.innerHTML += `<li>${textInput}</li>`;

	task2.querySelector("#newItemText").value = "";
});
