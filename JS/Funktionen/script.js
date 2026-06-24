
// Variante 1: Funktion wird im HTML aufgerufen.
// function bruttoRechner(event) {
//     event.preventDefault();
//     preis_brutto = document.getElementById("brutto").value;
//     steuer = (document.getElementById("steuer").value / 100) + 1;
    
//     output = document.getElementById("output");
//     output.innerHTML = "Netto Preis: "+(preis_brutto*steuer).toFixed(2)
// }

// Variante 2: mit addEventListener von JS aus aufrufen

bruttoRechner = function(event) {
    event.preventDefault();
    // const preis_brutto = document.getElementById("brutto").value;
    // const steuer = (document.getElementById("steuer").value / 100) + 1;

    
    const lokaleVariable ="hallo"
    // document.getElementById ist hinfällig, weil ich direkt auf die variable output zugreifen kann
    // "moderne" Browser erstellen im Hintergrund automatisch Variablen für jedes HTML Element mit der id als Variablenname
    // const output = document.getElementById("output");
    output.innerHTML = "Netto Preis: "+(brutto.value*(steuer.value/100+1)).toFixed(2)
}

// output.innerHTML =lokaleVariable // kein Zugriff auf Variable, weil sie nur in der funktion existiert
document.getElementById("rechnerForm").addEventListener("submit", bruttoRechner)


function getBiggerNumber(n1, n2) {
    if(n1>n2)
        return n1
    else if (n1<n2)
        return n2
    else 
        return NaN
}