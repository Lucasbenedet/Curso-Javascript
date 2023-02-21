let h1 = document.querySelector("#titulo-principal");

console.log(h1.style);


setTimeout(function() {
    h1.style.color = "blue";
    h1.style.backgroundColor = "red";
}, 5000);

