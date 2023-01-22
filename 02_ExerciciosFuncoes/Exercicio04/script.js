/*
    Escreva uma função que retorne um numero aleatorio;
    o Numero maximo retornado deve ser passado via parametro;
    Dica: Utilize Math.random();

*/

function aleatorio(x) {
    return Math.floor(Math.random() * x) + 1;
}

// Obs: quando for para retornar tem que usar console log
console.log(aleatorio(10));
console.log(aleatorio(100));
console.log(aleatorio(1000));

