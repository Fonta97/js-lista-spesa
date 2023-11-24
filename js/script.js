// creo lista della spesa 
// aggiungo articoli alla lista max 10 
// prompt articoli
// pusho articoli nella lista 
// aggiungo li nuovo con articolo inserito
// ripeto 

const list = [];
const listUl = documentquerySelector(".lista")
let i = 0;

while (list.length < 10) {
    const richiestaArticolo = prompt("Inserisci la tua lista della spesa ");
    list.push(richiestaArticolo);
    const elementLi = document.createElement("li");
    elementLi.append(richiestaArticolo)
    listUl.append(elementLi)
    i++;
}