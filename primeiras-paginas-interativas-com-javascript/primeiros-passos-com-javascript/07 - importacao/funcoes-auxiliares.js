
const entradas = [10, 5, 50, 10, 98, 23, 33, 44, 100, 1, 7];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

function tabuada(numero) {
    console.log('Tabuada de ' + numero);
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} * ${numero} = ` + (numero * 1));
    }
}

module.exports = { gets, print, tabuada };
