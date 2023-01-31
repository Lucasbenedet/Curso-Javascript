function checarNumero(valor) {
    let number = Number(valor);

    if (Number.isNaN(number)) {
        alert("Por favor passe so numeros para o programa");
    }else{
        return number;
    }

}


console.log(checarNumero(5));
checarNumero('aushuas');

let number = prompt("Digite um numero");

checarNumero(number);