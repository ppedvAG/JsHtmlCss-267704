// Alle Checkboxen mit dem Namen 'rooms' auswählen
var roomsCheckboxes = document.getElementsByName('rooms');
var complete = 0; // Anzahl der angehakten Zimmer standartmäßig 0
// alle checkboxen durchlaufen und complete erhöhen, falls eine bereits gecheckt ist.
for (var i = 0; i<roomsCheckboxes.length; i++) {         
    if(roomsCheckboxes[i].checked) {
    complete++;
    } // Alle Checkboxen standardmäßig angehakt
}
// progressbar auf die Anzahl der gechecken boxen setzen
document.getElementById('progr').value = complete;

for (var i = 0; i < roomsCheckboxes.length; i++) {
    roomsCheckboxes[i].addEventListener('change', function(){
        // Bei Änderung prüfen, ob die Checkbox angehakt wurde
        (this.checked) ? complete++ : complete--;
        // Fortschrittsbalken aktualisieren
        document.getElementById('progr').value = complete;
    });
}