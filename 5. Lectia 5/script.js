// 1. Pentru un tablou de elemente, afișați dacă numărul este par, impar sau zero..
const tablou = [1, 3, 5, 4, 7, 5, 6, 0, -5, 100];
for (let number of tablou) {
    if (number % 2 == 0 && number != 0) {
        console.log("Numar par: " + number)
    } else if (number % 2 != 0 && number != 0) {
        console.log("Numar impar: " + number)
    } else {
        console.log("E zero: " + number)
    }
}

// 2. Afișați elementul minim dintr-un tablou.
let min = tablou[0];

for (let num = 1; num < tablou.length; num++) {
    if (min > tablou[num]) {
        min = tablou[num];
    }
}

console.log("Cel mai mic element din tablou e:", min)

// 3. Afișați cel mai lung cuvânt dintr-un tablou.
const anotimpuri = ["vara", "toamna", "iarna", "primavara"]
let cuvantulLung = "";
for (const cuvant of anotimpuri) {
    if (cuvant.length > cuvantulLung.length) {
        cuvantulLung = cuvant;
    }
}
console.log("Cel mai lung cuvant e: ", cuvantulLung);