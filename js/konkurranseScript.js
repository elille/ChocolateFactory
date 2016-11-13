const butt = document.getElementById("deltaKnapp");
const wonText = document.getElementById("wonText");
const wonWrapper = document.getElementById("wonWrapper");
let wonBoolean = false;


butt.addEventListener("click", function(){
	wonBoolean= drawNumber();
	if (wonBoolean) {
		console.log("HURRA");
		wonWrapper.style.visibility = "visible";
		const wonCode = makeid();
		wonText.innerHTML = "Du vant! Din kode er \"" + wonCode + "\". Kontakt oss med koden på mail konkurranse@charlies.com for å få din premie.";
	}
});

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


function drawNumber(){
	let numb = Math.random()*10;
	numb = (Math.floor(numb % 10));
	return numb == 9;

}

function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
