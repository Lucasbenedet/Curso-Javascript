class Cachorro{
    constructor(raca,cor){
        this.raca = raca;
        this.cor = cor;
    }
    latir(){
        console.log("Au au");
    }
}


Cachorro.prototype.raca = 'SRD';

let patas = Symbol();

Cachorro.prototype[patas] = 4;

let pintier = new Cachorro("Pintier" , "Preto");

console.log(pintier.patas);

pintier.latir();

console.log(Cachorro.prototype.raca);
console.log(pintier.raca);


//Acessando Symbol

console.log(Cachorro.prototype[patas]);

console.log(pintier[patas]);
