console.log("Exercițiul 1")
// Un șir Fibonacci este un șir de numere care se formează prin suma ultimelor două numere din șir, începând cu 0, 1. Scrieți o funcție care afișează primele n numere din șirul Fibonacci, unde n este parametrul funcției.
// Exemplu Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13…

let fibonacci = [0, 1]
const n = 8;
for (let i = 0; i < (n - 2); i++) {
    let curr = fibonacci[i]
    let last = fibonacci[i + 1]
    last ?  fibonacci.push(curr + last): null
}

console.log(...fibonacci)

console.log("\nExercițiul 2")
// Creați o funcție care verifică dacă un număr este prim. Un număr este prim dacă este divizibil doar cu 1 și el însuși.
// Pentru un tablou de numere, afișați câte dintre acestea sunt prime.
function isPrim(tablou) {
    let prim = [];
    for (let numar of tablou) {
        let divizori = 0;
        for (let i = 1; i < numar + 1; i++) {
            if (numar % i == 0) {
                divizori++
            }
        }
        (divizori == 2) ? prim.push(numar) : null;
        divizori = 0
    }

    console.log(...prim)
}

isPrim([2, 3, 4, 5, 10, 11])

console.log("\nExercițiul 3")
// Creați un obiect “țară” care să conțină proprietățile nume, capitală, populație și vecini.
// Afișați un mesaj pe modelul: Finlanda are o populație de 4 milioane, capitala este Helsinki și vecinii sunt Suedia, Norvegia și Rusia.

const tara = {
    nume: null,
    capitala: null,
    populatie: null,
    vecini: null,
}

tara.nume = "Moldova";
tara.capitala = "Chisinau";
tara.populatie = "1.2 milioane";
tara.vecini = "Transnistria, Romania, Ucraina"

console.log(`${tara.nume} are o populație de ${tara.populatie}, capitala este ${tara.capitala} și vecinii sunt ${tara.vecini}.`)