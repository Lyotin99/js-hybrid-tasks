const usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
const passwordRegex = /^\w{5,15}$/;
const emailRegex = /@.*\./;
const companyNumberRegex = /^[1-9]{1}[0-9]{3}$/;
$("#valid").css("display", "none");

$("#company").on("change", (e) => {
	if ($(e.target).is(":checked")) {
		$("#companyInfo").css("display", "block");
	} else {
		$("#companyInfo").css("display", "none");
	}
});

const validate = () => {
	$("#registerForm").on("submit", function (e) {
		e.preventDefault();
		const formData = new FormData(e.target);

		const { username, email, password, confirmPassword, companyNumber } =
			Object.fromEntries(formData.entries());

		let validated = false;

		if (
			usernameRegex.test(username) &&
			emailRegex.test(email) &&
			passwordRegex.test(password) &&
			passwordRegex.test(confirmPassword) &&
			password === confirmPassword
		) {
			validated = true;

			if ($("#companyInfo").css("display") == "block") {
				if (companyNumberRegex.test(companyNumber)) {
					validated = true;
				} else validated = false;
			}
		}

		$("#valid").css("display", "block");
		$("#valid").text("Validated: " + validated);
	});

	$("#reset").on("click", function () {
		location.reload();
	});
};

validate();
