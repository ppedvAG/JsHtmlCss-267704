// neue Klasse Auto, ein Bauplan für ein Objekt Auto (was ist ein Auto, was kann ein Auto)
class Auto {
    // Eigenschaften, die lege ich im Konstruktor fest
    constructor(marke, modell, fahrer) {
        this.marke = marke;
        this.fahrer = fahrer;
        this.modell = modell;
    }

    // Methoden legen fest was ein Auto kann
    hupen() {
        alert(this.fahrer.getFullName()+ " hupt!");
    }
}

class Person {
    constructor(vorname, nachname, alter) {
        this.vorname = vorname
        this.nachname = nachname
        this.alter = alter;
    }

    // Methode für vollen namen
    getFullName() {
        return this.vorname + " " + this.nachname
    }
}

// Klasse wurde erstellt,
// somit wurede die Struktur (Eigenschaften und Methoden) für Objekte festgelegt
// Jetzt können wir Objekte dieser Klasse erstellen
// wenn man new Auto aufruft, wird er constructor aufgerufen (parameter müssen so wie im constructor sein)
const franz = new Person("Franz", "Gierlinger", 45);
const audiA3 = new Auto("Audi", "A3", franz);

// Eigenschaften verwenden (z.B. ausgeben)
console.log(audiA3.fahrer)
console.log(audiA3.marke)
console.log(audiA3.modell)

// Aufrufen der Methode hupen
audiA3.hupen();

// neues Fahrzeug erstellen ohne Parameter (Konstruktor-Aufruf)
const unbekanntesAuto = new Auto();
console.log(unbekanntesAuto.fahrer) // undefined
console.log(unbekanntesAuto.marke) // undefined
console.log(unbekanntesAuto.modell) // undefined

// Anonymes Objekt, definiert man ohne Class
// Direkte Zuweisung auf Variable
// Konstruktor wird nicht benötigt, weil das Objekt nur 1x erzeugt wird
const products = {
    name: "smartphone",
    price: 400,
    sales: 100,
    calculateRevenue: function() {
        return this.price * this.sales;
    }
}

products.name ="radio";

document.write(products.sales +" "+products.name+"s verkauft zum Preis "+products.price+
    "€<br> Umsatz: "+products.calculateRevenue()+"€<br>");

// Zweite products variable erstellen:
// die ursprüngliche kopiere

const products2 = products;
products2.name = "laptop";
products2.price = 1000;
products2.sales = 250;
products2.productID = "asdf"
document.write("id: "+products2.productID+"<br>")

document.write(products2.sales +" "+products2.name+"s verkauft zum Preis "+products2.price+
    "€<br> Umsatz: "+products2.calculateRevenue()+"€");

console.log(products2)
delete products2.productID;
console.log(products2)

document.write("<br><br>")
for (i in products) {
    if(!(products[i] instanceof Object))
        document.write(i+": "+products[i]+"<br>")
}

