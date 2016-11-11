/*
FILNAVN: js/pepperoniScript.js 
FORFATTER:  Jarl Victor Bjørgan
NÅR:  November 2016 
MÅL:  Roterer godteribildene på karriere.html siden
*/

// Alle peppermintene
const candies = [
document.getElementById('leftY'), 
document.getElementById('leftG'),
document.getElementById('leftR'),
document.getElementById('leftP'),
document.getElementById('rightY'),
document.getElementById('rightG'),
document.getElementById('rightR'),
document.getElementById('rightP')];


let degrees = 5;
setInterval(rotate, 50);

// Kjører en vri på alle bildene
function rotate(){
	for(var i = 0; i < candies.length; i++){
		turnImg(candies[i]);
	}
	degrees += 2;
}

// vrir et enkelt bilde
function turnImg(img){
	img.style.transform = "rotate(" + degrees + "deg)";
}