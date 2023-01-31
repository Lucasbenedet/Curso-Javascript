/**
 * Crie uma classe conta bancaria;
 * Com as propriedades de saldo na conta corrente, saldo na conta poupança e juros da poupança;
 * Crie os metodos de deposito e saque, tamebme um metodo para transferir dinheiro da poupança a corrente;
 * alem disso cire uma conta especial que herda da conta normal;
 * Na conta especial os juros são dobrados da conta normal;
 */

class Conta{
    constructor(contaCorrente,contaPoupança,juros){
        this.contaCorrente = contaCorrente;
        this.contaPoupança = contaPoupança;
        this.juros = juros;
    }

    deposito(valor){
        this.contaCorrente += valor;
    }
    saque(valor){
        this.contaCorrente -= valor;
    }
    transferencia(valor){
        this.contaCorrente -= valor;
        this.contaPoupança += valor;
    }

    jurosDeAniversario(){
        let juros = (this.contaPoupança * this.juros) / 100;
        this.contaPoupança += juros;
    }
}

class ContaEx extends Conta{
    constructor(contaCorrente,contaPoupança,juros){
        super(contaCorrente, contaPoupança, juros * 2);
    }
}

let conta = new Conta(1000,10000, 1);

console.log(conta);


conta.deposito(500);

conta.transferencia(500);

conta.jurosDeAniversario();

console.log(conta);

let conta2 = new ContaEx(10000,100000, 2);
conta2.jurosDeAniversario();

console.log(conta2);

