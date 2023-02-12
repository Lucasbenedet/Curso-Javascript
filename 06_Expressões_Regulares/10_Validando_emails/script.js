const emails= /\w+@\w+\.\w+/;

console.log(emails.test("lucas.benedet@gmail.com"));
console.log(emails.test("lucas.benedetgmail.com"));
console.log(emails.test("lucas.benedet@gmail"));


