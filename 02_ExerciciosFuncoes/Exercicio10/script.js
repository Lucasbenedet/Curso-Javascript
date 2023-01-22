/*
    Escreva uma função que receba um numero, e o decrementa de 1 em 1 com um loop;
    Além disso imprima somente os numeros pares no console;

*/

function decrement(x){
    while (x >= 0) {
        if (x % 2 == 0) {
            console.log(x + " é par")
        }
        x--;
    }
}

decrement(10);
