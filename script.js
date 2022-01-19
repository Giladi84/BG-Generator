var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".random");


var hexPool = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"]

function randomHex () {
	return "#" 
	+ hexPool[Math.floor(Math.random()*16)]
	+ hexPool[Math.floor(Math.random()*16)]
	+ hexPool[Math.floor(Math.random()*16)]
	+ hexPool[Math.floor(Math.random()*16)]
	+ hexPool[Math.floor(Math.random()*16)]
	+ hexPool[Math.floor(Math.random()*16)]
}




function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";

	random.style.background = 
	"linear-gradient(to left, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";


}

function randomizeColors () {
	color1.value = randomHex ();
	color2.value = randomHex ();
	setGradient()
}



window.addEventListener("load", setGradient);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", randomizeColors);