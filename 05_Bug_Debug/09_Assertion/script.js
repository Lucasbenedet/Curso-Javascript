let arr  = [1,2,3,4,5];
let arr2 = [];

function iterarAray(arr) {
    if (arr.length == 0) {
        throw new Error("O array precisa ter pelo menos um elemento");
    }else{
        for (let i = 0; i < array.length; i++) {
            
            console.log(i);
        }    
    }
}

function arrayVazio(arr) {
    if (arr.length > 0) {
        throw Error("O array nao pode ter elementos");
    }else{
         console.log("Agora deu certo");
    }
}

iterarAray(arr);
iterarAray(arr2);