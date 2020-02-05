/*
let getOrderDetails = function() {
	let res = [
		document.getElementById("name").value,
		document.getElementById("email").value,
		document.getElementById("street").value,
		document.getElementById("house").value,
		document.getElementById("pmethod").value
	];
	let genderOptions = document.getElementsByName("gender");
	var gender;
	for(var i = 0; i < genderOptions.length; i++) {
		if(genderOptions[i].checked) {
			gender = genderOptions[i].value;
			break;
		}
	}
	res.push(gender);
	return res;
}

let placeOrder = function() {
	console.log(getOrderDetails());
}
let orderPlacer = document.getElementById("orderplacer");

orderPlacer.addEventListener("click", placeOrder);
*/
