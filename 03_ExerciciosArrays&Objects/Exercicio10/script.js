/*
  Crie um objeto Calculadora;
  Que tem os seguintes metodos: somar, subtrair,multiplicar e dividr.
  Os metodos so devem aceitar dois parametros;
  Utilize cada um dos metodos e imprima os valores no console.

*/
const calculadora = {
  somar : function(a,b) {
    console.log(a+b);
  },
  subtrair : function(a,b) {
    console.log(a-b);
  },
  dividr: function(a,b) {
    console.log(a/b);
  },
  multiplciar : function(a,b) {
    console.log(a*b);
  }
}

calculadora.somar(5,7);
calculadora.dividr(10,2);
calculadora.subtrair(20,13);
calculadora.multiplciar(5,25);