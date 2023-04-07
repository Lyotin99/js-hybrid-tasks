const task3 = document.querySelector(".task3");

const btn = task3.querySelector("input[type=button]");
const cities = task3.querySelectorAll(".cities li");
const citiesCountMessage = task3.querySelector("p");

btn.addEventListener("click", (e) => {
	const searchWord = new RegExp(
		task3.querySelector("#newItemText").value,
		"g"
	);
	let citiesCount = 0;

	cities.forEach((city) => {
		city.style.fontWeight = "400";

		if (!city.textContent.match(searchWord)) return;

		city.style.fontWeight = "700";
		citiesCount++;
	});

	citiesCount > 0
		? (citiesCountMessage.innerHTML = `${citiesCount} matches found.`)
		: (citiesCountMessage.innerHTML = "");
});
