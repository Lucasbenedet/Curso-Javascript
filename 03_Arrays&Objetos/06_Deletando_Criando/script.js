let pessoa = {
    nome: "Lucas",
    idade: 25,
    profissao: "Programador"
}

console.log(pessoa.nome);
//deletando
delete pessoa.nome;

console.log(pessoa.nome);
console.log(pessoa);
//criando
pessoa.casada = false;

console.log(pessoa.casada);