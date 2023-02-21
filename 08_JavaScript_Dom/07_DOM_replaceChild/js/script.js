let newElement = document.createElement("p");
let texto = document.createTextNode("Qualquer coisa");

newElement.appendChild(texto);


let heading = document.querySelector('#titulo-principal');
let paiHeading = heading.parentNode;

paiHeading.replaceChild(newElement, heading);

