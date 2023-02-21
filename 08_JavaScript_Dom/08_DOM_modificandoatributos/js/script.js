let a = document.querySelector("footer a");

console.log(a.getAttribute('href'));

let link = 'https://www.horadecodar.com.br';

//setAtribute modifica o link e get pega o link
a.setAttribute('href', link);

console.log(a.getAttribute('href'));