function menuItem(name, kCal, allergenes, imgSrc) {
	this.name = name;
	this.kCal = kCal;
	this.allergenes = allergenes;
	this.imgSrc = imgSrc;
}

var menu = [];
menu.push(new menuItem("The Stocky Burger", 400, ["gluten", "lactose"], "https://image.shutterstock.com/image-photo/plant-based-burger-sesame-bun-600w-1543584050.jpg"));
menu.push(new menuItem("The Chicken Dream", 720, ["gluten", "palm oil"], "https://image.shutterstock.com/image-photo/studio-shoot-delicious-chicken-burger-600w-1502962535.jpg"));
menu.push(new menuItem("Hottern Tottern", 690, ["gluten", "lactose"], "https://image.shutterstock.com/image-photo/burger-600w-360983072.jpg"));
menu.push(new menuItem("The Vector Burger", 420, ["lactose"], "https://st2.depositphotos.com/6323354/10184/v/950/depositphotos_101843094-stock-illustration-big-tasty-burger-with-meat.jpg"));
menu.push(new menuItem("Not Burger", 550, ["gluten", "lactose", "palm oil"], "https://media.gettyimages.com/photos/studio-shot-of-pepperoni-pizza-picture-id116360264?s=2048x2048"));

let addEmptyNode = function(parentNode, nodeType) {
	let newNode = document.createElement(nodeType);
	parentNode.appendChild(newNode);
	return newNode;
}

let addNode = function(parentNode, nodeType, content) {
	let newNode = addEmptyNode(parentNode, nodeType);
	let newContent = document.createTextNode(content);
	newNode.appendChild(newContent);
	return newNode;
}

let burgerListParent = document.getElementById("js_burgers");
for(var i = 0; i < menu.length; i++) {
	let burgerDiv = addEmptyNode(burgerListParent, "div");
	addNode(burgerDiv, "h2", menu[i].name);
	let infoList = addEmptyNode(burgerDiv, "ul");
	addNode(infoList, "li", menu[i].kCal + " kCal");

	for(var j = 0; j < menu[i].allergenes.length; j++) {
		addNode(infoList, "li", "Contains " + menu[i].allergenes[j]);
	}
}
