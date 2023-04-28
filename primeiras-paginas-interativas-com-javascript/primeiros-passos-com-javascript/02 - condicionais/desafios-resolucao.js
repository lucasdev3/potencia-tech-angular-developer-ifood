/*

Faça um programa para calcular o valor de uma viagem

Você terá 5 variáveis. Sendo elas:

1 -  Preço do etanol;
2 -  Preço da gasolina;
3 -  O tipo do combustivel que está no seu carro;
4 - Gasto Médio de combustível do carro por km;
5 - Distancia em km da viagem;

Imprima no console o valor que será gasto de combustivel para realizar esta viagem

*/

const precoGasolina = 6.66;
const precoEtanol = 5.79;
const distancia = 100;
const consumoPorKm = 10;
const tipoCombustivel = 'Etanol';

let totalGasto = 0;

if (tipoCombustivel === 'Etanol') {
    totalGasto = calculaCustoViagem(precoEtanol);
    console.log('Total da viagem com etanol: R$' + totalGasto.toFixed(2));
} else if (tipoCombustivel === 'Gasolina') {
    totalGasto = calculaCustoViagem(precoGasolina);
    console.log('Total da viagem com gasolina: R$' + totalGasto.toFixed(2));
} else {
    console.log('Tipo de combustivel invalido');
}


function calculaCustoViagem(precoCombustivel) {
    return (distancia / consumoPorKm) * precoCombustivel;
}


