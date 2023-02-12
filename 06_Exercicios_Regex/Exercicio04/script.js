/**
 *  Crie uma regex que valide endereços de IP;
 *  Ex: 127.0.0.1
 *  Depois teste;
 * 
*/


const ip = /\d{1,3}[.]\d{1,3}[.]\d{1,3}[.]\d{1,3}/;

console.log(ip.test("128.1.2.3.4"));
console.log(ip.test("128.1.2.3"));
console.log(ip.test("128.1.2ad.3"));
console.log(ip.test("128.1dasd.2.3.4"));
console.log(ip.test("1213sadasd8.11.2.3.4"));
