class Cachorro{
    constructor(raca,cor){
        this.raca = raca;
        this.cor = cor;
    }
    
    get getRaca (){
        return 'A raça é ' + this.raca;
    }

    set setRaca (raca){
        this.raca = raca;
    }
}


let poodle = new Cachorro("SRD" , "Branco");

poodle.setRaca = "Poodle";

console.log(poodle.getRaca);