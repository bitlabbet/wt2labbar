var inp1Elem, inp2Elem; //variablerna deklareras här
var resElem;

function init() { // deklarerar en funktion med namnet init, koden som initieras följer inom klammerparenteserna.
    inp1Elem = document.getElementById("input1"); //idattribut (input)
    inp2Elem = document.getElementById("input2"); //idattribut (input) stavade fel till id:t här först och fick märkliga fel, men löste det genom att titta i konsollen.
    resElem = document.getElementById("result"); //idattribut (div där resultaten ska visas)
    document.getElementById("runBtn").onclick = areaCalculations; //idattribut (button)
    
}
window.onload = init; // När skriptfilen bearbetas och kommer hit körs initfunktionen

function areaCalculations() {
    let length; //deklarera variabel för längd
    let width; //deklarerar variabel för bredd
    let area; //deklarerar variabelk för area (yta i kvadratmeter)

    length = Number(inp1Elem.value); //Läser in i textfältet för längd, konverteras till nummer
    width = Number(inp2Elem.value); //Läser in i textfältet för bredd, konverteras till nummer
    //Area för rektangel
    area = length * width;
    resElem.innerHTML = `<p>Rektangelns area är ${area} m<sup>2</sup></p>`; //VSC föreslog att jag skulle skriva strängen så här, tycker nästan att det blir tydligare så
    //resELem-variabeln får varje gång ett nytt strängvärde som skrivs i div:en med id:t result
    //Area för ellips
    area = 3.14 * length * width / 4;
    resElem.innerHTML += `<p>Ellipsens area är ${area} m<sup>2</sup></p>`; //fick först inte area-raden att visas, förstår varför jag behövde använda operatorn += för att första raden helt enkelt inte skulle skrivas över
    //Arean av rektangel då längden ökas med 5 meter
    area = (length + 5) * width; //variabeln length adderas med 5
    resElem.innerHTML += "<p>Då längden ökas med 5m blir rektangelns area " + area + " m<sup>2</sup></p>";
    //Egen kod för att beräkna area då längden ökas med 50 procent och bredden ökas med 3 meter
    area = (length * 1.5) * (width + 3); // längden * 1.5 för ökning med 50%
    resElem.innerHTML += "<p>Då längden ökas med 50% och bredden med 3 meter blir rektangelns area " + area + " m<sup>2</sup></p>";
    // beräkning av triangelns area omvandlat till kvadratfot
    area = (length * 3.28) * (width * 3.28) / 2;
    resElem.innerHTML += "<p>Triangelns area blir " + area + " kvadratfot"; 
} //Slut på funktion