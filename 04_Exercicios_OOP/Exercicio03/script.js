/**
 * Crie um objeto que simula um endereço de um cliente;
 * Propriedades: Rua, Bairro,Cidade e Estado;
 * No construtor o endereço ja deve ser definido por completo;
 * Crie Métodos para atualizar todas as propriedades;
 */

class endereço{
    constructor(rua, bairro, cidade, estado){
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }
    
    set novaRua(novaRua){
        this.rua = novaRua;
    }
    set novoBairro(novoBairro){
        this.bairro= novoBairro;
    }
    set novaCidade(novaCidade){
        this.cidade = novaCidade;
    }
    set novoEstado(novoEstado){
        this.estado = novoEstado;
    }
}


let newCliente = new endereço("Rua Paula Ramos", "Coqueiros", "Florianopolis", "SC ");

console.log(newCliente);

newCliente.novoBairro = "Capeiras";

console.log(newCliente);