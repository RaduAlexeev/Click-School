// 1. Să scriem o funcție care întoarce ultima cifră a unui număr trimis ca parametru.
const sirDeNumere = [12, 0, 2, 7, 45, 100, 99]
function lastNumber(arr) {
    var lastNum = arr.pop()
    console.log(lastNum)
}

lastNumber(sirDeNumere)

// 2. Să scriem o funcție care verifică dacă un număr trimis ca parametru este divizibil cu 7. Să se verifice pentru 17, 28, 44, 56, 57.
const tablou = [17, 28, 44, 56, 57]

function esteDivizibil(arr, divizibil) {
    for (const number of arr) {
        if (number % divizibil == 0) {
            console.log(number, "- este numar divizibil pentru:", divizibil)
        }
    }
}

esteDivizibil(tablou, 7)