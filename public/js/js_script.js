function menuItem(name, kCal, hasGluten, hasLactose, hasPalmOil, imgSrc) {
	this.name = name;
	this.kCal = kCal;
	this.hasGluten = hasGluten;
	this.hasLactose = hasLactose;
	this.hasPalmOil = hasPalmOil;
	this.imgSrc = imgSrc;
	this.info = function() {
		return this.name + " " + this.kCal;
	}
}

let stockyBurger = new menuItem("The Stocky Burger", 400, true, true, false, "https://image.shutterstock.com/image-photo/plant-based-burger-sesame-bun-600w-1543584050.jpg");
let chickenDream = new menuItem("The Chicken Dream", 720, true, false, true, "https://image.shutterstock.com/image-photo/studio-shoot-delicious-chicken-burger-600w-1502962535.jpg");
let hotternTottern = new menuItem("Hottern Tottern", 690, true, true, false, "https://image.shutterstock.com/image-photo/burger-600w-360983072.jpg");
let vectorBurger = new menuItem("The Vector Burger", 420, false, true, false, "https://st2.depositphotos.com/6323354/10184/v/950/depositphotos_101843094-stock-illustration-big-tasty-burger-with-meat.jpg");
let notBurger = new menuItem("Not Burger", 550, true, true, true, "https://media.gettyimages.com/photos/studio-shot-of-pepperoni-pizza-picture-id116360264?s=2048x2048");

let addP = function(id, content) {
	let node = document.getElementById(id);
	let newP = document.createElement("p");
	let newContent = document.createTextNode(content);
	newP.appendChild(newContent);
	node.appendChild(newP);
}

addP("fiddleme_js", stockyBurger.info());
addP("fiddleme_js", chickenDream.info());
addP("fiddleme_js", hotternTottern.info());
addP("fiddleme_js", vectorBurger.info());
addP("fiddleme_js", notBurger.info());
