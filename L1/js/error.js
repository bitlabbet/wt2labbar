// Globala variabler
var inp1Elem, inp2Elem;	// Referenser till textfältet för input
var resElem;			// Referens till div-elementet för resultat

// Initiering av globala variabler och händelsehanterare
function init() {
	inp1Elem = document.getElementById("input1");
	inp2Elem = document.getElementById("input2");
	resElem = document.getElementById("result");
	document.getElementById("runBtn").onclick = areaCalculations;
} // End init
window.onload = init; // Se till att init aktiveras då sidan är inladdad

// --------------------------------------------------

// Kod för beräkningar av area
function areaCalculations() {
	// Deklaration av variabler
	var length;		// Längd i meter
	var width;		// bredd i meter
	var area;		// Yta i kvadratmeter
	
	length = Number(inp1Elem.value); 
	width = Number(inp2Elem.value); //Number() constructor skrivs med stor bokstav, ska vara Number således

	area = length * width; // Här saknades operatorn för multiplicering. Vi beräknar area med längden * bredden
	resElem.innerHTML += "<p>Rektangelns area: " + area + "</p>"; //Add & assign-operatorn var fel här märkte jag när jag tittade på koden
	
	area = length * width / 2; // här märker jag att variabeln är felstavad
	resElem.innerHTML += "<p>Triangelns area: " + area + "</p>"; //här saknades ett citattecken för att programmet ska kunna behandla taggen som en sträng
	
	area = 3,14 * length * width / 4;
	resElem.innerHTML += "<p>Ellipsens area: " + area + "</p>";
	
} // End areaCalculations
