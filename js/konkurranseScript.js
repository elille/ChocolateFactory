const butt = document.getElementById("deltaKnapp");
const wonText = document.getElementById("wonText");
const wonWrapper = document.getElementById("wonWrapper");
let wonBoolean = false;


// når man trykker på knappen kalles denne. Inspirasjon hentet fra http://www.w3schools.com/jsref/met_element_addeventlistener.asp
butt.addEventListener("click", function(){
	wonBoolean= drawNumber();
	if (wonBoolean) {
		// lite, morsom easter egg for de som liker å se i konsollen sin
		console.log("HURRA");
		// viser frem gullbilletten
		wonWrapper.style.visibility = "visible";
		// kaller metode som lager en kode
		const wonCode = makeid();
		// legger på teksten på billetten
		wonText.innerHTML = "Du vant! Din kode er \"" + wonCode + "\". Send oss en mail med koden til konkurranse@charlies.com for å få din premie.";
	}
});

// legger til sånn at man kan trykke på esc knappen for å fjerne gullbilletten
// Kode lånt fra http://stackoverflow.com/questions/3369593/how-to-detect-escape-key-press-with-javascript-or-jquery
document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key == "Escape" || evt.key == "Esc");
    } else {
        isEscape = (evt.keyCode == 27);
    }
    if (isEscape) {
			console.log("Fedig");
			wonWrapper.style.visibility = "hidden"
    }
};

// velger et random antall (maks 10) ganger man må trykke på "delta-knappen" for å vinne hjep tatt fra http://www.w3schools.com/jsref/jsref_random.asp
function drawNumber(){
	let numb = Math.random()*10;
	numb = (Math.floor(numb % 10));
	return numb == 9;
}

// lager en ID til gullbilletten slik at alle får en unik ID
function makeid() {
  var text = "";
	// her kunne man brukt en regex, men jeg bare klarer ikke å skrive dem...
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for( var i=0; i < 5; i++ )
  	text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
