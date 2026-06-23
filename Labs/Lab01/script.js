// Alle Checkboxen mit dem Namen 'rooms' auswählen
let roomsCheckboxes = document.getElementsByName('rooms');
console.log(roomsCheckboxes);
let complete = 0; // Anzahl der angehakten Zimmer standartmäßig 0
// alle checkboxen durchlaufen und complete erhöhen, falls eine bereits gecheckt ist.
for (let i = 0; i<roomsCheckboxes.length; i++) {         
    if(roomsCheckboxes[i].checked) {
        complete++;
    } // Alle Checkboxen standardmäßig angehakt
}
// progressbar auf die Anzahl der gechecken boxen setzen
document.getElementById('progr').value = complete;
console.log("Initialisierung wurde ausgeführt, complete: " + complete)


for (let i = 0; i < roomsCheckboxes.length; i++) {
    const progressbarFunction = function(){
        console.log("Checkbox mit index "+i+" wurde geändert");
        // Bei Änderung prüfen, ob die Checkbox angehakt wurde
        (this.checked) ? complete++ : complete--; // ? - Turnary Operator
        // Dieser Code ist identisch zu der if - else Verkettung
        // if(this.checked) {
        //     complete++;
        // } else {
        //     complete--;
        // }
        // Fortschrittsbalken aktualisieren
        document.getElementById('progr').value = complete;
    }
    roomsCheckboxes[i].addEventListener('change', progressbarFunction);
}