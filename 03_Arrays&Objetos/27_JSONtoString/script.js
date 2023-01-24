let pessoa = {
    "nome" : "Lucas",
    "idade" : 25,
    "profissao" : "programador",
    "hobbies" : ["Video game", "Leitura" , "Academia"]

}

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);

let pessoaJSON = JSON.parse(pessoaTexto);

console.log(pessoaJSON);

