// let numbers = [1,2,3,4,5];
// let sum = 0;
// for(let i =0; i<numbers.length; i++) {
//     sum+= numbers[i];
// }
// console.log("Die Summe der Zahlen ist: "+sum);


class Taschenrechner {
    constructor(zahlen) {
        this.zahlen = zahlen
    }

    SummeBerechnen() {
        sum = 0;
        for(let i =0; i<this.zahlen.length; i++) {
            sum+= this.zahlen[i];
        }
        return sum;
    }

    AddZahl(Zahl) {
        this.zahlen.push(Zahl);
    }

    RemoveZahl(Index) {
        this.zahlen.splice(Index, 1);
    }
}

taschenrechner = new Taschenrechner([1,2,3]);
console.log(taschenrechner.SummeBerechnen());
taschenrechner.AddZahl(10);
console.log(taschenrechner.zahlen);
taschenrechner.RemoveZahl(0);
console.log(taschenrechner.zahlen); 