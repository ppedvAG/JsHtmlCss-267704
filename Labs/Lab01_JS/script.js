// Zwei Variablen vom Datentyp Integer (Number)
let Zahl_1 = 230
let Zahl_2 = 489

if(Zahl_1 > Zahl_2) {
    document.write(Zahl_1 + " ist größer als " + Zahl_2);
} else if(Zahl_1<Zahl_2) {
    document.write(Zahl_1 + " ist kleiner als " + Zahl_2);
} else {
    document.write("Die Zahlen sind gleich.")
}

document.write("<br>")

let Stadt = "München"

switch(Stadt) {
    case "Berlin":
        document.write("Die Stadt ist Berlin");
        break;
    case "Bremen":
        document.write("Die Stadt ist Bremen");
        break;
    case "München":
        document.write("Die Stadt ist München");
        break;
    default:
        document.write("Die Stadt ist unbekannt.");
        break;
    
}