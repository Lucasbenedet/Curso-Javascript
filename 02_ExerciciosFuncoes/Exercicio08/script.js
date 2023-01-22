/*
   Escreva uma função que receba uma String;
   Se o texto conter mais de 10 caracteres imprima "Texto muito longo";
   Se conter menos, imprima "Texto dentro do limite";

*/

function texto(texto) {
    if (texto.length > 10) {
        console.log("texto muito longo");
    }else{
        console.log(" texto esta dentro do limite");
    }
}

texto("Lucas");
texto("paralelepipedo")

