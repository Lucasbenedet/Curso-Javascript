/**
 * Crie uma classe que simule um carro;
 * Propriedade: marca,cor,gasolina restante;
 * crie um metodo de dirigir o carro, que va dimminuindo a gasolina gradativamente;
 * e um de abastecer para aumentar a gasolina quando necessario;
 */

class Carro{
    constructor(marca,cor,fuel){
      this.marca = marca;
      this.cor = cor;
      this.fuel = fuel;
    }
    
    dirigir(){

        for(let gasolina = this.fuel; gasolina >= 0; gasolina -= 0.5) {
            if (gasolina == 0 ) {
                console.log("Sua gasolina Acabou");
            }else{
                console.log("Sua gasolina esta em " + gasolina + "Litros" );
            }
        }

        return this.fuel = 0;
    }

    abastecer(qtd){
        return this.fuel = qtd;
    }
}


let carro = new Carro("Chevrolet", "Preto", 5.0);

console.log(carro);

carro.dirigir();

console.log(carro);

if (carro.fuel == 0) {
    carro.abastecer(10);
}
console.log(carro);
