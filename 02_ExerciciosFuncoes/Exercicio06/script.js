/*
   Escreva uma função que detecta o tipo de dado passado;
   Verifique se é um: number, boolean ou string;
   E retorne uma mensagem para cada tipo;
   Execute uma função para cada caso;

*/

function tipoDeDado(x) {
    if (typeof x  === 'number') {
        console.log("Este dado é um numero");
    }else if (typeof x === 'boolean') {
        console.log("Este dado é um Boolean");
    }else if (typeof x === 'string') {
        console.log("Este dado é uma String");
    }
}

tipoDeDado(15);
tipoDeDado(true);
tipoDeDado("Lucas");

