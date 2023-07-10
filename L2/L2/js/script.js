// Globala variabler
var inp1Elem, inp2Elem, msgElem;

// --------------------------------------------------
// Initiering av globala variabler och händelsehanterare
function init() {
    inp1Elem = document.getElementById("input1"); //Får värde från textfält med id input1
    inp2Elem = document.getElementById("input2"); //Får värde från textfält med id input2
    msgElem = document.getElementById("message"); //Ska få ett värde som ska läggas i div-element med id message
    document.getElementById("btn1").onclick = showFruit; // här ska funktionen showFruit anropas med knappen med id btn1 (getElementById)
	
} // Slut init
window.onload = init; // Se till att init aktiveras då sidan är inladdad
// --------------------------------------------------

// Funktionen showFruit som ska avläsa ett tal i det första textfältet (input1)
function showFruit(inp1Elem) { //skickar med variabel med data från första textfälte. Värden skickas när funktionen anropas.
    let nr = Number(inp1Elem.value); //konverterar till datatypen Number
    let url; //deklarerar variabeln url som används för att länka rätt bild .. (TEST)


    case 1: url = "img/apple.png"; break;


}
// ---------------------------------------------------

