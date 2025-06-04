/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = "Mario";

// Dichiara la funzione qui.
//dichiaro la funzione helloTimed con parametro name
function helloTimed(name) {
  //inizializzo il metodo getHours per ottenere l'orario del browser
  const d = new Date();
  let hour = d.getHours();
  // creo le condizioni per cambiare il messaggio visualizzato in console sulla base dell'orario
  if (hour <= 13) {
    return "Buongiorno " + name; // 00:00-13:59
  } else if (hour <= 17) {
    return "Buon pomeriggio " + name; // 14:00-16:59
  } else if (hour > 17) {
    return "Buonasera " + name; // 17:00-23:00
  }
}

// Invoca la funzione qui e stampa il risultato in console

console.log(helloTimed(name));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.

// TODO: arrow function

let browserTimeHello = (name) => {
  //inizializzo il metodo getHours per ottenere l'orario del browser
  const d = new Date();
  let hour = d.getHours();
  // creo le condizioni per cambiare il messaggio visualizzato in console sulla base dell'orario
  if (hour <= 13) {
    return "Buongiorno " + name; // 00:00-13:59
  } else if (hour <= 17) {
    return "Buon pomeriggio " + name; // 14:00-16:59
  } else if (hour > 17) {
    return "Buonasera " + name; // 17:00-23:00
  }
};

// invoco la funzione e ne stampo il risulstato in console

console.log(browserTimeHello(name));
