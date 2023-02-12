function verificarNum(num) {
    return new Promise((resolve,reject) => {
        if( num == 2){

            resolve(console.log(`O numero é ${num}`));

        }else{
            reject(new Error("Falhou"));
        }
    });
}

verificarNum(2);
verificarNum(4);