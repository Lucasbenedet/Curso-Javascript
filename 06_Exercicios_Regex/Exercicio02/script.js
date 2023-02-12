/**
 *  Crie um Regex que só aceite strings terminadas com ID
 */


const maiusculas = /\w+ID\b/;

console.log(maiusculas.test("LUCAS"));
console.log(maiusculas.test("LucasID"));
console.log(maiusculas.test("LucasI"));
console.log(maiusculas.test("123123ID"));
