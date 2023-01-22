/*
    Escreva uma função que recebe a idade de uma pessoa;
    Se ela tem mais de 18 anos ela pode entrar na auto escola, imprima uma mensagem informando isso;
    Se ela tem menos, ela não pode, imprima outra mesagem com este aviso;
    Execute a função nos dois casos;

*/

function autoEscola(idade) {
    if (idade >= 18) {
        console.log("Você pode entrar na auto escola");
    }else{
        console.log("Você não pode entrar na auto escola");
    }
}

autoEscola(25);
autoEscola(15);


