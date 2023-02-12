const pontoRegex = /./; // Pega tudo
const dRegex = /\d/; // [ 0-9]
const dRegex2 = /\D/; // Não aceita numeros
const sRegex = /\s/; // Aceita somente espaços em brancos, quebras de linhas e tabs
const sRegex2 = /\S/; // Não aceita espaçoes em branco
const wRegex = /\w/; // [Qualquer caracter alfanumerico]
const wRegex2 = /\W/; // [Não aceita caracter alfanumerico]

const dia = /\d\d/;

console.log(dia.test("2023") && "2023".length == 2);
console.log(dia.test("alksdjkas"));
console.log(dia.test("05") && "05".length == 2);
console.log(dia.test("asd1"));


const palavraTresLetras = /\w\w\w/;

console.log(palavraTresLetras.test("2019"));
console.log(palavraTresLetras.test("asd"));
console.log(palavraTresLetras.test("as"));
console.log(palavraTresLetras.test("asdasd") && "asdasd".length == 3);
