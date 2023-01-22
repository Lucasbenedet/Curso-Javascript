/*
  Crie um array a partir de uma frase;
  Imprima cada palavra do array no console por meio de um for;

*/

let frase = "Pretendo ser um programador fullstack"

let array = frase.split(" ");

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
  
}