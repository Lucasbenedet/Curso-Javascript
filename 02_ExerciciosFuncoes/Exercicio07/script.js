/*
   Escreva uma função que receba um numero negativo e retorne um numero positivo;
   Dica: utilize a função Math.abs

*/

function inversao(x) {
    if (x < 0) {
        return Math.abs(x);
    }else{
        return "Este numero ja é positivo";
    }
}

console.log(inversao(-25));
console.log(inversao(25));
console.log(inversao(-2));
