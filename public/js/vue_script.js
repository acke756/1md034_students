/* jslint es6:true */
/* global Vue, menu, io */
"use strict";
const socket = io();

/* eslint-disable-next-line no-unused-vars */
const vm = new Vue({
	el: "#main",
	data: {
		menu: menu,
		name: "",
		email: "",
		pmethod: "PayPal",
		gender: "undisclosed",
		orders: {},
		checkedburgers: []
	},
	created: function() {
		socket.on("initialize", function(data) {
			this.orders = data.orders;
		}.bind(this));

		socket.on("currentQueue", function(data) {
			this.orders = data.orders;
		}.bind(this));
	},
	methods: {
		getNext: function() {
			let lastOrder = Object.keys(this.orders).reduce(function(last, next) {
				return Math.max(last, next);
			}, 0);
			return lastOrder + 1;
		},
		addOrder: function(event) {
			let offset = {
				x: event.currentTarget.getBoundingClientRect().left,
				y: event.currentTarget.getBoundingClientRect().top
			};
			socket.emit("addOrder", {
				orderId: this.getNext(),
				details: {
					x: event.clientX - 10 - offset.x,
					y: event.clientY - 10 - offset.y
				},
				orderItems: ["Beans", "Curry"]
			});
		},
		placeOrder: function() {
			document.getElementById("received").style.display = "initial";
		}
	}
})
