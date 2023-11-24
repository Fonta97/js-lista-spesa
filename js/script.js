// creo lista della spesa 
// aggiungo articoli alla lista max 10 
// prompt articoli
// pusho articoli nella lista 
// aggiungo li nuovo con articolo inserito
// ripeto 

const list = ["pere", "mele", "chele", "eskere", "michele"];
const listUl = document.querySelector(".lista");
let i = 0;

while (i < list.length) {

    const elementLi = document.createElement("li");

    elementLi.append(list[i])

    listUl.append(elementLi);

    i++;

}