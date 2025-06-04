/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = "Mario";

// Dichiara la funzione qui.
//* dichiaro la funzione hello con parametro name e il return "Ciao [name]"

function hello(name) {
  return "Ciao " + name;
}

// Invoca la funzione qui e stampa il risultato in console
//*invoco la funzione e la stampo in console

console.log(hello(userName));

//Risultato atteso se si passa 'Mario': // ciao Mario
