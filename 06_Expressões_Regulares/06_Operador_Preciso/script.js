const cep = /\d{5}-\d{3}/;

console.log(cep.test("88080-401"));
console.log(cep.test("sajda"))
console.log(cep.test("8808-40"));

const tel = /\(\d{2}\)\d{4,5}-\d{4}/;

console.log(tel.test("(48)99926-9839"));