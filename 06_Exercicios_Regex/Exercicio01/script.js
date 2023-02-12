/**
 *  Crie um Regex que aceite so letras maiusculas;
 */


const maiusculas = /[A-Z]/;

console.log(maiusculas.test("LUCAS"));
console.log(maiusculas.test("lucas"));
console.log(maiusculas.test("Lucas"));
