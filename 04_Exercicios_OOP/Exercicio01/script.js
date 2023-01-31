/**
 *      Crie uma classe que simula uma conta no banco(utilize a forma que preferir);
 *          Deve conter a propriedade saldo;
 *          E os metodos deposito e saque; 
 *          Teste os metodos;
 */

class contaBanco{
    constructor(saldo){
        this.saldo = saldo;
    }

    sacar(valor){
        this.saldo -= valor;
    }

    deposito(valor){
        this.saldo += valor;
    } 
}

let novaConta = new contaBanco(2000);

console.log("Seu saldo é de " + novaConta.saldo);

novaConta.sacar(1000);

console.log("Seu novo saldo é de " + novaConta.saldo);

novaConta.deposito(3000);

console.log("Seu novo saldo é de " + novaConta.saldo);