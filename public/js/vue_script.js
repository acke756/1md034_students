/* jslint es6:true */
/* global Vue, menu, io */
"use strict";
const socket = io();

/* eslint-disable-next-line no-unused-vars */
const vm = new Vue({
	el: "#main",
	data: {
		nextId: 0,
		mapClicked: false,
		menu: menu,
		name: "",
		email: "",
		pmethod: "PayPal",
		gender: "undisclosed",
		orderDetails: {
			x: 0,
			y: 0
		},
		orders: {},
		checkedburgers: []
	},
	methods: {
		getNext: function() {
			this.nextId++;
			return this.nextId;
		},
		displayOrder: function(event) {
			this.mapClicked = true;
			this.orderDetails.x = event.clientX - 10 - event.currentTarget.getBoundingClientRect().left;
			this.orderDetails.y = event.clientY - 10 - event.currentTarget.getBoundingClientRect().top;
		},
		addOrder: function() {
			if(this.mapClicked) {
				socket.emit("addOrder", {
					orderId: this.getNext(),
					details: this.orderDetails,
					orderItems: this.checkedburgers,
					personInfo: {
						name: this.name,
						email: this.email,
						pmethod: this.pmethod,
						gender: this.gender
					}
				});
			}
		},
		placeOrder: function() {
			document.getElementById("received").style.display = "initial";
		}
	}
})
