let a = 1;
let b = 2;

if (a == 1) {
    a = b + 2;
}

for (let i = 0; i < b; i++) {
    a = a + 2; 
}

debugger;

if (a > 10) {
    a = a * b;
}

console.log(a);