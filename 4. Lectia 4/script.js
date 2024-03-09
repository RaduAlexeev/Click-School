// 1. Afișați toate numerele pare până la un număr dat n
const n = 3;
for (let i = 0; i < n + 1; i++) {
    if (i % 2 == 0) {
        console.log("Numar par: " + i)
    }
}

// 2. Afișați suma numerelor până la un număr dat n
let sum = 0;
for (let y = 0; y < n + 1; y++) {
    sum += y;
}
console.log("Suma numerelor pana la numarul", n, "=", sum)

// 3. Câte cifre are un număr n?
let count = 0;
for (let k = 1; k < n + 1; k++) {
    count++;
}
console.log(n, "are", count, "cifre")

// 4. Tabla înmulțirii la un număr n
for (let j = 1; j < n + 1; j++) {
    for (let p = 1; p < n + 1; p++) {
        console.log(j, "*", p, "=", j * p)
    }
    console.log()
}

// 5. Afișați un triunghi de caractere * (numărul de rânduri va fi n)

let text = "";
for (let r = 0; r < n; r++) {
    text += "*";
    console.log(text)
}