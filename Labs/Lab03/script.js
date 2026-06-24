class pizza {
    constructor(typ, extras, lieferadresse, knoblauch) {
        this.typ = typ;
        this.extras = extras;
        this.lieferadresse =lieferadresse;
        this.knoblauch = knoblauch
    }
}

class lieferadresse {
    constructor(vorname, nachname, strasse, plz, ort, tel, email) {
        this.vorname = vorname;
        this.nachname = nachname;
        this.strasse = strasse;
        this.plz = plz;
        this.ort = ort;
        this.tel = tel;
        this.email = email;
    }
}

function bestellung() {
    event.preventDefault()
    const adresse = new lieferadresse(
        document.getElementById("first-name").value,
        document.getElementById("last-name").value,
        document.getElementById("addr").value,
        document.getElementById("postalCode").value,
        document.getElementById("place").value,
        document.getElementById("phone").value,
        document.getElementById("mail").value
    )
    const selectedPizza = document.querySelector('input[name="pizze"]:checked');
    extrasCB = document.getElementsByName("extras")
    extras = new Array()
    for(let i = 0; i<extrasCB.length; i++ ){
        if(extrasCB[i].checked) {
            extras.push(extrasCB[i].value)
        }
    }
    const meinePizza = new pizza(
        selectedPizza.value,
        extras,
        adresse,
        document.getElementById("select-garlic").value
    )
    
    
    // die beiden for "Köpfe" erzeugen die gleiche schleife
    // for(let i = 0; i<meinePizza.length; i++)
    for(let i in meinePizza) {
        if(meinePizza[i] instanceof lieferadresse) {
            output.innerHTML +="Lieferadresse: <br>"
            for(let j in meinePizza[i]) {
                output.innerHTML +="&nbsp;"+j+": "+meinePizza[i][j]+"<br>"
            }
        } else {
            output.innerHTML += i+": "+meinePizza[i]+"<br>"
        }
    }
}

