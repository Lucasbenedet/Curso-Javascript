const datas= /^\d{2}[/]\d{2}[/]\d{4}/;
const datas2= /^[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;

console.log(datas.test("17/10/1997"));
console.log(datas.test("117/10/1997"));
console.log(datas.test("17/110/1997"));