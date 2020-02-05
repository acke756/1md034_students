const vm = new Vue({
	el: "#main",
	data: {
		menu: menu,
		name: "",
		email: "",
		street: "",
		house: "",
		pmethod: "PayPal",
		gender: "undisclosed",
		checkedburgers: []
	},
	methods: {
		placeOrder: function() {
			document.getElementById("received").style.display = "initial";
		}
	}
})
