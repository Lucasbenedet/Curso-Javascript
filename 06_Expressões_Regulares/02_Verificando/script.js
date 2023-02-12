const reg1 = new RegExp("bola");
const reg2 = /test/;

console.log(reg1.test("Tem bola?"));
console.log(reg1.test("Tem test?"));

console.log(reg2.test("Tem test?"));
console.log(reg2.test("Tem bola?"));

let texto = "tem tenis aqui?"

console.log(/tenis/.test(texto));