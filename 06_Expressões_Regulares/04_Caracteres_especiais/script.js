const pontoRegex = /./; // Pega tudo

console.log(pontoRegex.test("asd"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("123"));
console.log(pontoRegex.test("123sdas"));

const dRegex = /\d/; // [ 0-9]
const dRegex2 = /\D/; // Não aceita numeros
const sRegex = /\s/; // Aceita somente espaços em brancos, quebras de linhas e tabs
const sRegex2 = /\S/; // Não aceita espaçoes em branco
const wRegex = /\w/; // [Qualquer caracter alfanumerico]
const wRegex2 = /\W/; // [Não aceita caracter alfanumerico]