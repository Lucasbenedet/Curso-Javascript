let newElement = document.createElement("p");
let texto = document.createTextNode("Qualquer coisa");

newElement.appendChild(texto);


let p = document.querySelector("#box");
let pai = p.parentNode;

pai.appendChild(newElement);


