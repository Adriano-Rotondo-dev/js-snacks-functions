/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
// * credo l'array vuoto start
const start = [ ]
// dichiaro la funzione beginWord
function beginWord(array, letter) {
    for (let i = 0; i < array.length; i++){
        if  (array[i].startsWith("A")) {
        } 
        start.push(array[i])
    }
}

// Invoca la funzione qui e stampa il risultato in console

console.log(beginWord(names))


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]