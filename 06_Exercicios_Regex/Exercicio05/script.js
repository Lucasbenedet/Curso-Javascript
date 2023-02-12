/**
 *  Crie uma regex que valide nome de usuarios no sistema;
 * Aceite letras de a-z,_e-,numeros de 0-9,minimo de 3 caracteres e maximo de 16;
 * 
*/


const usuario = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(usuario.test("lucas-1710"));
console.log(usuario.test("lu"));
console.log(usuario.test("lucas-1710asjasdsdas"));

