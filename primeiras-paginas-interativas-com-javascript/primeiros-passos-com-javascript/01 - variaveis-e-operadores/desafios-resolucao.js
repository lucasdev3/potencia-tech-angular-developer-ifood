/*
Faça um programa para calcular o valor de uma viagem

Você terá 3 variáveis. Sendo elas:

1 -  Preço do combustível;
2 - Gasto Médio de combustível do carro por KM;
3 - Distancia em KM da viagem

Imprima no console o valor que será gasto de combustivel para realizar esta viagem
*/

const precoCombustivel = 5.79; // Real
const consumoPorKm = 12;  // KM/L
const distanciaViagem = 1580; // KM

const custoTotal = ( distanciaViagem/consumoPorKm ) * precoCombustivel; // Litros consumidos * o preço do combustivel

console.log('Custo total da viagem: R$' + custoTotal.toFixed(2));

