let newElement = document.createElement("p");
let texto = document.createTextNode("Qualquer coisa");

newElement.appendChild(texto);


let irmao = document.querySelector("div h1");
let pai = irmao.parentNode;

pai.insertBefore(newElement, irmao);


