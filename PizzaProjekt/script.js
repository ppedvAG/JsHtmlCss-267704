// Gewähleistet, dass das DOM vollständig geladen ist, bevor das Script ausgeführt wird
document.addEventListener("DOMContentLoaded", function () {


    // Alle Cookies abrufen und in einem Array speichern
    const cookies = document.cookie.split(";");
    let gespeichertePizza = "";
    // Nach dem Cookie "letztePizza" suchen
    for(let i =0; i<cookies.length; i++) {
        const cookie=cookies[i].trim(); //trimm löscht Leerzeichen am Anfang und am Ende des Strings -> aus " letztePizza " wird "letztePizza"
        if(cookie.startsWith("letztePizza")) {
            // Den Wert des Cookies extrahieren (z.B. "salami")
            gespeichertePizza = cookie.substring("letztePizza=".length);
            break;
        }
    }
    console.log(gespeichertePizza)

    // Wenn eien Cookie gefunden wurde, die Felder ausfüllen
    if(gespeichertePizza) {
        try {
            const daten = JSON.parse(decodeURIComponent(gespeichertePizza));
            console.log(daten)
            if(daten.sorte) {
                const pizzaRadio = document.querySelector(`input[name="pizze"][value="${daten.sorte}"]`);
                if (pizzaRadio) pizzaRadio.checked=true;
            }
            if(daten.extras && Array.isArray(daten.extras)) {
                document.querySelectorAll('input[name="extras"]').forEach(cb => cb.checked = false);
                daten.extras.forEach(extraWert => {
                    const extraCheckbox = document.querySelector(`input[name="extras"][value="${extraWert}"]`);
                    if(extraCheckbox) extraCheckbox.checked=true;
                })
            }
            if(daten.knoblauch) {
                const knoblauchSelect= document.getElementById("select-garlic");
                if(knoblauchSelect) knoblauchSelect.value=daten.knoblauch;
            } 

            if (daten.lieferadresse) {
                const adr = daten.lieferadresse;
                if (document.getElementById("first-name")) document.getElementById("first-name").value = adr.vorname || "";
                if (document.getElementById("last-name"))  document.getElementById("last-name").value = adr.nachname || "";
                if (document.getElementById("addr"))       document.getElementById("addr").value = adr.strasse || "";
                if (document.getElementById("postalCode")) document.getElementById("postalCode").value = adr.plz || "";
                if (document.getElementById("place"))      document.getElementById("place").value = adr.ort || "";
                if (document.getElementById("phone"))      document.getElementById("phone").value = adr.telefon || "";
                if (document.getElementById("mail"))       document.getElementById("mail").value = adr.email || "";
            }
        } catch (e) {
            console.error("Fehler beim Laden der Cookie-Daten: ", e)
        }
    }


    // Klasse für die Lieferadresse
    class Lieferadresse {
        constructor(vorname, nachname, strasse, plz, ort, telefon, email) {
            this.vorname = vorname;
            this.nachname = nachname;
            this.strasse = strasse;
            this.plz = plz;
            this.ort = ort;
            this.telefon = telefon
            this.email = email;
        }
    }

    // Klasse für die Pizza-Bestellung
    class Pizza {
        constructor(sorte, extras, knoblauch, lieferadresse) {
            this.sorte = sorte;
            this.extras = extras;
            this.knoblauch = knoblauch;
            this.lieferadresse = lieferadresse;
        }
    }
    // Es gibt eine modernere Variante: querySelector
    // const form = document.getElementsByClassName("form-demo");
    // Formular-Element anhand der Klasse auswählen und in Variable form speichern
    const form = document.querySelector(".form-demo");

    // Event-Listener für das Absenden des Formulars hinzufügen
    form.addEventListener("submit", function(event) {
        // Verhindert das Neuladen der Seite
        event.preventDefault();

        // 1. Ausgewählte Pizza auslesen
        const pizzaElement = document.querySelector('input[name="pizze"]:checked');
        const sorte = pizzaElement.value;

        // 2. Ausgewählten Extras sammeln
        const extraElements = document.querySelectorAll('input[name="extras"]:checked');
        // <input type="checkbox" name="extras" value="mais">
        // map läuft alle Input Elemente durch und speichert NUR den value (zB "Mais") in das extras Array
        // nennt man auch mapping
        const extras = Array.from(extraElements).map(element => element.value);

        // Knoblauch Option auslesen
        const knoblauch = document.getElementById("select-garlic").value;

        // 4. Instanz der Klasse Lieferadresse ertellen
        const adresse = new Lieferadresse (
            document.getElementById("first-name").value,
            document.getElementById("last-name").value,
            document.getElementById("addr").value, 
            document.getElementById("postalCode").value,
            document.getElementById("place").value,
            document.getElementById("phone").value,
            document.getElementById("mail").value
        )

        // 5. Instanz der Klasse Pizza erstellen (enthält die Adresse)
        const neueBestellung = new Pizza(sorte, extras, knoblauch, adresse);



        console.log(neueBestellung);

        const cookieInhalt = encodeURIComponent(JSON.stringify(neueBestellung));
        document.cookie = `letztePizza=${cookieInhalt}; max-age= ${60*60*24*30}; path=/`;

        // 6. JSON-Datei generieren und herunterladen
        speichereAlsJsonDatei(neueBestellung);

        // 7. Ausgabe auf der Webseite aktuallisieren
        document.getElementById("output").innerText = JSON.stringify(neueBestellung, null, 2);

        // 8. output Fenster Sichtbar machen
        document.querySelector(".output").style.display ="block"
    });


    /**
     * Konvertiert ein JavaScript-Objekt in ein JSON-Format und startet
     * automatisch einen Download dieser Datei im Browser des Nutzers.
     * @param {Object} object - Das zu speichernde Objekt (z.B. eine Instanz der Klasse Pizza)
     */
    function speichereAlsJsonDatei(object) {
        // 1. Objekt in einen JSON Sting umwandeln
        //      null: Es wird keine Ersetzungsfunktion (Replacer benutzt)
        //      2: Sorgt für eine schöne Formatierung mit 2 Leerzeichen Einrückung pro Ebene.
        const jsonString = JSON.stringify(object, null, 2);

        // 2. Ein Blob (Binary Large Object) aus String erstellen
        //      Dadurch versteht der Browser die Textdaten als "Datei" vom Typ "application/json".
        const blob = new Blob([jsonString], {type: "application/json"});

        // 3. Eine temporäre, interne URL für diesen Blob generieren
        //      Diese URL (beginnt meist mit blob:) zeigt direkt auf den Speicherbereich im Browser
        const url = URL.createObjectURL(blob);

        // 4. Ein unsichtbares HTML-ANker-Element (<a>-Tag) im Speicher erstellen
        const a = document.createElement("a");

        // 5. Das aktuelle Datum im Format YYYY-MM-DD extrahieren
        const dateStr = new Date().toISOString().slice(0,10);

        //6. Den Dateinamen für den Download festlegen
        //  Nutzt das Datum und Date.now() (Millisekunden seit 1970), damit jeder Name absolut einzigartig ist
        a.download= `bestellung_${dateStr}_${Date.now()}.json`

        // 7. Die temporäre Blob-URL als Link-Ziel (href) hinterlegen
        a.href = url;

        // 8. Einen künstlichen Klick auf den Link auslösen
        //      öffnet das "Speichern-unter"-Fenster des Browsers bzw. startet den Download
        a.click();

        // 9. Den temorär reservierten Speicherplatz im Browser wieder freigeben
        //      Wichtig, um Speicherlecks (Memory Leaks) zu vermeiden, da die URL nicht mehr gebraucht wird
        URL.revokeObjectURL(url);
    }

    // Neu: EventListener für das Kontaktformular
    const kontaktForm = document.querySelector(".kontakt-form");

    kontaktForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Werte auslesen
        const name = document.getElementById("kontakt-name").value;
        const email = document.getElementById("kontakt-mail").value;
        const nachricht = document.getElementById("kontakt-nachricht").value;

        // Einfache Erfolgsmeldung im Browser anzeigen
        alert(`Vielen Dank für deine Nachricht, ${name}!\nWir werden uns unter ${email} melden.`);

        //Formular leeren
        kontaktForm.reset();
    })

});
