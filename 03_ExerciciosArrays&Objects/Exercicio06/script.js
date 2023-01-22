/*
  Crie dois arrays, um com mais de 5 elementos e outro com menos;
  Faça uma função que verifica o numero de elementos;
  se possuir menos que 5, imprima "Poucos elementos" no console;
  Se tiver mais, Imprima "Muitos elementos";

*/

let nomes = ["Gabriel", "Pedro","Lucas","Arthur"];
let nomes1 = ["Gabriel", "Pedro","Lucas","Arthur","Roberto"];

function numeroElementos(elementos) {
    if(elementos.length < 5){
        console.log("Poucos elementos");
    }else{
        console.log("Muitos elementos");
    }
}


numeroElementos(nomes);
numeroElementos(nomes1);


