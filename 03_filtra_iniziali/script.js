/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.
// * creo l'array vuoto start
// dichiaro la funzione beginWord con parametri array e letter e inizializzo il ciclo for
// ciclo all'interno dell'array per recuperare la prima lettera di ogni elemento
//pusho quell'elemento dentro l'array start
function beginWord(array, letter) {
  const start = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i][0] === letter) {
      start.push(array[i]);
    }
  }
  return start;
}

// Invoca la funzione qui e stampa il risultato in console
//invoco la funzione con la lettera che mi interessa e stampo il risultato in console
console.log(beginWord(names, "A"));
console.log(beginWord(names, "L"));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

//TODO: arrow function
// dichiaro l'arrow function
const startWord = (array, letter) => {
    // creo l'array vuoto all'interno della arrow function
  const start = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i][0] === letter) {
      start.push(array[i]);
    }
  }
  return start;
};
// invoco l'arrow function e stampo il risultato in console
console.log(startWord(names, "A"));
console.log(startWord(names, "L"));
