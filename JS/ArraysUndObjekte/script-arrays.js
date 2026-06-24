// neues Array erstellen
// variante 1: leeres Array, später befüllen
let array = new Array();
array[0] = 12;
array[1] = 45;
array[10] = 0;
console.log(array);

// variante 2: Array direkt befüllen
let cities =["Vienna", "Berlin","Berlin", "Rome", "New York"]
console.log(cities)
console.log(cities[2])

// Array mit String als Index
let dominik =new Array();
dominik["Vorname"] = "Dominik";
dominik["Nachname"] = "Enzenhofer";
dominik["Wohnort"] = "Wien";
dominik["Arbeitgeber"] ="ppedv"

document.write("Vorname: "+dominik["Vorname"]+ "<br>Nachname: "+dominik["Nachname"]+"<br> Wohnort: "+dominik["Wohnort"])
document.write("<br>Arbeitgeber: "+dominik["Arbeitgeber"])
console.log(dominik)

console.log(array.concat(cities))
document.write("<br>")
document.write(cities.toString())
document.write("<br>")
document.write(cities.join("<br>"))
document.write("<br>")
document.write(cities.indexOf("Berlin"))

// Element am Ende hinzufügen
cities.push("Athen")
// Element am Anfang hinzufüen
cities.unshift("Peking")

document.write("<br>")
document.write(cities.join(", "))

// letztes Element entfernen
cities.pop()

document.write("<br>")
document.write(cities.join(", "))

// erstes Element entfernen
cities.shift()

document.write("<br>")
document.write(cities.join(", "))

// Elemente entfernen: Parameter1 ist Startindex; Parameter 2 ist Anzahl der zu entfernenden Elemente
cities.splice(2, 2, "Amsterdam", "Paris") // Anstelle der entfernten Elemente "Amsterdam" und "Paris" einfügen
document.write("<br>")
document.write(cities.join(", "))

cities.reverse()
document.write("<br>")
document.write(cities.join(", "))

// Array in einer Schleife durchlaufen
for(let i = 0; i<cities.length; i++) {
    cities[i] = cities[i].toUpperCase();
}

// for in Schleife ist einfacher
for(let city in cities) {
    document.write("<br>"+cities[city])
}

document.write("<br>")
document.write(cities.join(", "))
