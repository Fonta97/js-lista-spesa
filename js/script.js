// creo lista della spesa 
// aggiungo articoli alla lista max 10 
// prompt articoli
// pusho articoli nella lista 
// aggiungo li nuovo con articolo inserito
// ripeto 

const list = [];
const listUl = document.querySelector(".lista");
let i = 0;

while (list.length < 10) {

    const richiestaArticolo = prompt("Inserisci la tua lista della spesa ");

    list.push(richiestaArticolo);

    const elementLi = document.createElement("li");

    elementLi.append(list);

    listUl.append(elementLi);

    i++;

}