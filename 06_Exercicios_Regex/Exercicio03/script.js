/**
 *  Crie um REgex que aceite a seguinte expressão "Marca:nomeDaMarca";
 *  Onde nomeDaMarca pode variar para Nike, Adidas,Puma Asics;
 * 
*/


const marca = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(marca.test("Marca: Lucas"));
console.log(marca.test("Marca: 121231"));
console.log(marca.test("Marca: Nike"));
console.log(marca.test("estilo: Puma"));
