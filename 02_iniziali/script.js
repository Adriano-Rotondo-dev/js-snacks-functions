/* Scrivi una funzione che accetti un array di nomi e restituisca un nuovo array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
//* creo un array vuoto per conservare le iniziali dei nomi

const newArray = [];

/* dichiaro la funzione firstChar dentro la quale inizializzo un ciclo for
- Ciclo dentro l'array names e recupero la prima lettera [.charAt(0)] di ogni elemento dell'array
- salvo le lettere selezionate nella variabile firstLetter
- pusho il contenuto della variabile firstLetter nell'array vuoto newArray creato in precedenza
*/

function firstChar() {
  for (let i = 0; i < names.length; i++) {
    const firstLetter = names[i].charAt(0);
    newArray.push(firstLetter);
  }
  return newArray;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(firstChar(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

// TODO: arrow function
// creo un nuovo array vuoto 
const newArrayArrow = [];
//dichiaro e invoco l'arrow function
const firstLetterArrow = () => {
  for (let i = 0; i < names.length; i++) {
    const startLetterArrow = names[i].charAt(0);
    newArrayArrow.push(startLetterArrow)
  }
  return newArrayArrow
};
// stampo in console il risultato della funzione
console.log(firstLetterArrow(names))
