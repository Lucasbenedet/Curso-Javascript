const reg1 = /[12345]/;


console.log(reg1.test("Temos o numero 6"));
console.log(reg1.test("Temos o numero 2"));

const reg2 = /[0-9]/;

console.log(reg2.test("Temos o numero 239429384928374"));
console.log(reg2.test("Temos o numero"));