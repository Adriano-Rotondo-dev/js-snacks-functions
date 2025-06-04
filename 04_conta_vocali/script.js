/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.
// dichiaro la funzione vowelsCounter con parametro string
function vowelsCounter(string) {
    // inizializzo una variabile "counter" che aumenterà sulla base delle vocali che trova all'interno della parola
  let counter = 0;
  //inizializzo il ciclo for per ciclare all'interno della stringa
  for (let i = 0; i < string.length; i++) {
    //inizializzo la variabile vowel che estrae il singolo carattere
    let vowel = string[i];
    // verifico se il singolo carattere è una delle vocali
    if (
      vowel === "a" ||
      vowel === "e" ||
      vowel === "i" ||
      vowel === "o" ||
      vowel === "u"
    ) {
        // se è una delle vocali, incrementa la variabile counter 
      counter++; 
    }
  }
  // restituisco il valore della variabile
  return counter
}

// Invoca la funzione qui e stampa il risultato in console
console.log(vowelsCounter(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)

//TODO: arrow function
