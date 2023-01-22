/*
   Adicione a propredades janelas no ônibus, com o valor de 20;
   Delete a propriedade rodas;
   imprima a propriedade janelas no console;

*/

const onibus = {
    rodas : 8,
    limitePassageiros : 40,
    portas: 2
}

delete onibus.rodas;

onibus.janelas = 20;

console.log(onibus.janelas);



