console.log("Exercițiul 1")
// Să scriem o funcție descriereTara care ia ca parametri nume, populatie și capitala și afișează un mesaj de descriere a țării.
// Exemplu: Finlanda are o populație de 6 milioane locuitori și capitala este Helsinki.

function descriereTara(tara, capitala, populatie) {
    console.log(`${tara} are o populație de ${populatie} milioane locuitori și capitala este ${capitala}.`)
}

descriereTara("Moldova", "Chisinau", 1.2)

console.log("\nExercițiul 2")
// Să scriem o funcție procentajPopulatie care ia ca parametru populația unei țări și returnează cât la sută din populația globului înseamnă acea valoare.
// Exemplu: Lumea are 7.900.000.000, iar China are 1.441.000.000 locuitori, deci vom afișa “Populația reprezintă 18.2% din glob. Putem lucra în milioane, deci considerăm populația globului 7900.

function procentajPopulatie(populatia) {
    const procent = (populatia * 100 / 7900000000).toFixed(2)
    console.log(`Lumea are 7900000000, iar tara noastra are ${populatia} locuitori, deci vom afișa “Populația reprezintă ${procent}% din glob. Putem lucra în milioane, deci considerăm populația globului 7900.`)
}

procentajPopulatie(1200000)

console.log("\nExercițiul 3")
// Îmbinăm exercițiile 1 și 2 și afișăm atât descrierea unei țări, cât și procentajul din populația globală folosindu-ne de funcțiile create.

descriereTara("Moldova", "Chisinau", 1.2)
procentajPopulatie(1200000)

console.log("\nExercițiul 4")
// Creați o funcție care va primi ca parametru un tablou de note și va returna media notelor. 

function mediaNotelor(arr) {
    let sum = 0;
    let media = 0;
    for (const nota of arr) {
        sum += nota;
    }
    media = (sum / arr.length).toFixed(2)

    console.log("Media notelor:", media)
    return media
}

const media = mediaNotelor([5, 7, 2, 10, 8, 5, 6])

console.log("\nExercițiul 5")
// Folosim funcția de la exercițiul precedent și afișăm în dependență de media notelor dacă studentul este eminent(media >= 9),
// bravo(media < 9 și > 5) și repetent(media<5)
if (media >= 9) {
    console.log("Eminent")
} else if (media < 9 && media > 5) {
    console.log("Bravo")
} else {
    console.log("Repetent")
}