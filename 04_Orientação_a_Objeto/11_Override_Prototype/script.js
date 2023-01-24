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
Cachorro.prototype.patas = 4;
let pintier = new Cachorro("Pintier" , "Preto");

console.log(pintier.patas);

pintier.latir();

console.log(Cachorro.prototype.raca);
console.log(pintier.raca);
