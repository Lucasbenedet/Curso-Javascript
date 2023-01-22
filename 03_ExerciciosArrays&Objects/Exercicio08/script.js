/*
  Crie um JSON com 3 propriedades;
  Atribua ele a uma Variavel;
  Acesse as propriedades imprimindo no console;

*/
const people = {
  "Nome" : "Lucas",
  "Idade" : 25,
  "Hobbies": ["Video Game","Academia"]
}

let peopleVar = JSON.stringify(people);

console.log(peopleVar);
console.log(people.Nome);
console.log(people.Idade);
console.log(people.Hobbies);

