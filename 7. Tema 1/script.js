console.log("Exercițiul 1 - Calculator BMI (Body Mass Index)")
// Luiza și Dima vor să își măsoare Body Mass Index (BMI), care se calculează după formula: BMI = greutate / înălțime * înălțime. Greutatea se va măsura în kg, iar înălțimea în metri.

// Cerințe:
// Atribuiți valorile greutății și înălțimii în variabile.
// Calculați BMI cu formula de mai sus.
// Creați o variabilă boolean care să determine dacă BMI-ul lui Dima este mai mare decât al Luizei.
// Afișați în consolă cine are un BMI mai mare și care sunt valorile.
const luiza = {
    greutatea: 60,
    inaltimea: 1.66,
    bmi: null
}
const dima = {
    greutatea: 90,
    inaltimea: 1.76,
    bmi: null
}

function BMI(greutate, inaltimea) {
    return (greutate / inaltimea * inaltimea)
}

dima.bmi = BMI(dima.greutatea, dima.inaltimea)
luiza.bmi = BMI(luiza.greutatea, luiza.inaltimea)

let moreDimaBMI = null;
if (dima.bmi > luiza.bmi) {
    moreDimaBMI = true;
} else {
    moreDimaBMI = false;
};

if (moreDimaBMI) {
    console.log("Dima are BMI mai mare:", "\nBMI:", dima.bmi)
} else {
    console.log("Luiza are BMI mai mare:", "\nBMI:", luiza.bmi)
};

console.log("\nExercițiul 2 - Calculator de tips")
// Carolina vrea să aibă un calculator de tips pentru că atunci când iese la restaurant vrea să știe cât trebuie să plătească în funcție de totalul de pe bon. În localurile în care merge ea, valoarea tips este de 15%, dacă nota este între 50 și 800 lei, și de 20% dacă nota este peste 800 lei.

// Cerințe:
// Calculați valoarea pentru tips în funcție de totalul notei.
// Afișați în consolă cât este valoarea notei, cea pentru tips și totalul de plătit.
const nota = 500;

function valoareaTipsului(price) {
    if (price >= 50 && price <= 800) {
        return nota * 0.15;
    } else if (price > 800) {
        return price * 0.20;
    } else {
        return 0;
    };
};

const tips = valoareaTipsului(nota)

console.log("Tips:", tips, "\nTotalul de platit", nota + tips)

console.log("\nExercițiul 3 - Palindrom")
// Lui Olea îi plac numerele palindrom. Un număr este considerat palindrom dacă răsturnatul său (citit de la dreapta la stânga) este egal cu originalul (Exemplu: numărul 12321 este palindrom).

// Cerințe:
// Să se determine dacă o variabilă conține o valoare palindrom.
// Afișați în consolă numărul și un mesaj dacă acesta este sau nu palindrom.

const text = "12321";

function isPolindrom(text) {
    return text == text.split("").reverse().join("")

}

console.log(text, ":", isPolindrom(text) ? "este" : "nu e", "polindrom")